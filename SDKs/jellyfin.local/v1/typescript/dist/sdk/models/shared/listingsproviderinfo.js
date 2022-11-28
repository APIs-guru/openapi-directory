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
import { NameValuePair } from "./namevaluepair";
var ListingsProviderInfo = /** @class */ (function (_super) {
    __extends(ListingsProviderInfo, _super);
    function ListingsProviderInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelMappings", elemType: NameValuePair }),
        __metadata("design:type", Array)
    ], ListingsProviderInfo.prototype, "channelMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAllTuners" }),
        __metadata("design:type", Boolean)
    ], ListingsProviderInfo.prototype, "enableAllTuners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnabledTuners" }),
        __metadata("design:type", Array)
    ], ListingsProviderInfo.prototype, "enabledTuners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KidsCategories" }),
        __metadata("design:type", Array)
    ], ListingsProviderInfo.prototype, "kidsCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListingsId" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "listingsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MovieCategories" }),
        __metadata("design:type", Array)
    ], ListingsProviderInfo.prototype, "movieCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MoviePrefix" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "moviePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NewsCategories" }),
        __metadata("design:type", Array)
    ], ListingsProviderInfo.prototype, "newsCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredLanguage" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "preferredLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SportsCategories" }),
        __metadata("design:type", Array)
    ], ListingsProviderInfo.prototype, "sportsCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserAgent" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ZipCode" }),
        __metadata("design:type", String)
    ], ListingsProviderInfo.prototype, "zipCode", void 0);
    return ListingsProviderInfo;
}(SpeakeasyBase));
export { ListingsProviderInfo };
