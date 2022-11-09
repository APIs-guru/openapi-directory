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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// GetIosReopenAttributionResponse
/**
 * Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
**/
var GetIosReopenAttributionResponse = /** @class */ (function (_super) {
    __extends(GetIosReopenAttributionResponse, _super);
    function GetIosReopenAttributionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=deepLink" }),
        __metadata("design:type", String)
    ], GetIosReopenAttributionResponse.prototype, "deepLink", void 0);
    __decorate([
        Metadata({ data: "json, name=invitationId" }),
        __metadata("design:type", String)
    ], GetIosReopenAttributionResponse.prototype, "invitationId", void 0);
    __decorate([
        Metadata({ data: "json, name=iosMinAppVersion" }),
        __metadata("design:type", String)
    ], GetIosReopenAttributionResponse.prototype, "iosMinAppVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=resolvedLink" }),
        __metadata("design:type", String)
    ], GetIosReopenAttributionResponse.prototype, "resolvedLink", void 0);
    __decorate([
        Metadata({ data: "json, name=utmCampaign" }),
        __metadata("design:type", String)
    ], GetIosReopenAttributionResponse.prototype, "utmCampaign", void 0);
    __decorate([
        Metadata({ data: "json, name=utmContent" }),
        __metadata("design:type", String)
    ], GetIosReopenAttributionResponse.prototype, "utmContent", void 0);
    __decorate([
        Metadata({ data: "json, name=utmMedium" }),
        __metadata("design:type", String)
    ], GetIosReopenAttributionResponse.prototype, "utmMedium", void 0);
    __decorate([
        Metadata({ data: "json, name=utmSource" }),
        __metadata("design:type", String)
    ], GetIosReopenAttributionResponse.prototype, "utmSource", void 0);
    __decorate([
        Metadata({ data: "json, name=utmTerm" }),
        __metadata("design:type", String)
    ], GetIosReopenAttributionResponse.prototype, "utmTerm", void 0);
    return GetIosReopenAttributionResponse;
}(SpeakeasyBase));
export { GetIosReopenAttributionResponse };
