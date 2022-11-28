var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var RemoteSearchResult = /** @class */ (function (_super) {
    __extends(RemoteSearchResult, _super);
    function RemoteSearchResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArtist" }),
        __metadata("design:type", RemoteSearchResult)
    ], RemoteSearchResult.prototype, "albumArtist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Artists", elemType: RemoteSearchResult }),
        __metadata("design:type", Array)
    ], RemoteSearchResult.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageUrl" }),
        __metadata("design:type", String)
    ], RemoteSearchResult.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexNumber" }),
        __metadata("design:type", Number)
    ], RemoteSearchResult.prototype, "indexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexNumberEnd" }),
        __metadata("design:type", Number)
    ], RemoteSearchResult.prototype, "indexNumberEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], RemoteSearchResult.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overview" }),
        __metadata("design:type", String)
    ], RemoteSearchResult.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" }),
        __metadata("design:type", Number)
    ], RemoteSearchResult.prototype, "parentIndexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PremiereDate" }),
        __metadata("design:type", Date)
    ], RemoteSearchResult.prototype, "premiereDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductionYear" }),
        __metadata("design:type", Number)
    ], RemoteSearchResult.prototype, "productionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderIds" }),
        __metadata("design:type", Map)
    ], RemoteSearchResult.prototype, "providerIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SearchProviderName" }),
        __metadata("design:type", String)
    ], RemoteSearchResult.prototype, "searchProviderName", void 0);
    return RemoteSearchResult;
}(SpeakeasyBase));
export { RemoteSearchResult };
