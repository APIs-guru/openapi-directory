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
// GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse
/**
 * Response containing counts for devices that need attention.
**/
var GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse, _super);
    function GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noRecentPolicySyncCount" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.prototype, "noRecentPolicySyncCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noRecentUserActivityCount" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.prototype, "noRecentUserActivityCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osVersionNotCompliantCount" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.prototype, "osVersionNotCompliantCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingUpdate" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.prototype, "pendingUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unsupportedPolicyCount" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.prototype, "unsupportedPolicyCount", void 0);
    return GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse;
}(SpeakeasyBase));
export { GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse };
