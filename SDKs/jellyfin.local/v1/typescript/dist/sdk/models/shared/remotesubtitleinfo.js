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
var RemoteSubtitleInfo = /** @class */ (function (_super) {
    __extends(RemoteSubtitleInfo, _super);
    function RemoteSubtitleInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Author" }),
        __metadata("design:type", String)
    ], RemoteSubtitleInfo.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment" }),
        __metadata("design:type", String)
    ], RemoteSubtitleInfo.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommunityRating" }),
        __metadata("design:type", Number)
    ], RemoteSubtitleInfo.prototype, "communityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateCreated" }),
        __metadata("design:type", Date)
    ], RemoteSubtitleInfo.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DownloadCount" }),
        __metadata("design:type", Number)
    ], RemoteSubtitleInfo.prototype, "downloadCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], RemoteSubtitleInfo.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], RemoteSubtitleInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsHashMatch" }),
        __metadata("design:type", Boolean)
    ], RemoteSubtitleInfo.prototype, "isHashMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], RemoteSubtitleInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderName" }),
        __metadata("design:type", String)
    ], RemoteSubtitleInfo.prototype, "providerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreeLetterISOLanguageName" }),
        __metadata("design:type", String)
    ], RemoteSubtitleInfo.prototype, "threeLetterIsoLanguageName", void 0);
    return RemoteSubtitleInfo;
}(SpeakeasyBase));
export { RemoteSubtitleInfo };
