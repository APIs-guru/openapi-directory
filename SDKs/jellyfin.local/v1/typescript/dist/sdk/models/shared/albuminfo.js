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
import { SongInfo } from "./songinfo";
var AlbumInfo = /** @class */ (function (_super) {
    __extends(AlbumInfo, _super);
    function AlbumInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArtists" }),
        __metadata("design:type", Array)
    ], AlbumInfo.prototype, "albumArtists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArtistProviderIds" }),
        __metadata("design:type", Map)
    ], AlbumInfo.prototype, "artistProviderIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexNumber" }),
        __metadata("design:type", Number)
    ], AlbumInfo.prototype, "indexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAutomated" }),
        __metadata("design:type", Boolean)
    ], AlbumInfo.prototype, "isAutomated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataCountryCode" }),
        __metadata("design:type", String)
    ], AlbumInfo.prototype, "metadataCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataLanguage" }),
        __metadata("design:type", String)
    ], AlbumInfo.prototype, "metadataLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], AlbumInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" }),
        __metadata("design:type", Number)
    ], AlbumInfo.prototype, "parentIndexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], AlbumInfo.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PremiereDate" }),
        __metadata("design:type", Date)
    ], AlbumInfo.prototype, "premiereDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderIds" }),
        __metadata("design:type", Map)
    ], AlbumInfo.prototype, "providerIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SongInfos", elemType: SongInfo }),
        __metadata("design:type", Array)
    ], AlbumInfo.prototype, "songInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Year" }),
        __metadata("design:type", Number)
    ], AlbumInfo.prototype, "year", void 0);
    return AlbumInfo;
}(SpeakeasyBase));
export { AlbumInfo };
