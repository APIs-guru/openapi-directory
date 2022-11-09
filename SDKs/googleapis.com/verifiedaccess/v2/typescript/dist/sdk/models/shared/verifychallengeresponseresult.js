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
export var VerifyChallengeResponseResultKeyTrustLevelEnum;
(function (VerifyChallengeResponseResultKeyTrustLevelEnum) {
    VerifyChallengeResponseResultKeyTrustLevelEnum["KeyTrustLevelUnspecified"] = "KEY_TRUST_LEVEL_UNSPECIFIED";
    VerifyChallengeResponseResultKeyTrustLevelEnum["ChromeOsVerifiedMode"] = "CHROME_OS_VERIFIED_MODE";
    VerifyChallengeResponseResultKeyTrustLevelEnum["ChromeOsDeveloperMode"] = "CHROME_OS_DEVELOPER_MODE";
    VerifyChallengeResponseResultKeyTrustLevelEnum["ChromeBrowserHwKey"] = "CHROME_BROWSER_HW_KEY";
    VerifyChallengeResponseResultKeyTrustLevelEnum["ChromeBrowserOsKey"] = "CHROME_BROWSER_OS_KEY";
})(VerifyChallengeResponseResultKeyTrustLevelEnum || (VerifyChallengeResponseResultKeyTrustLevelEnum = {}));
// VerifyChallengeResponseResult
/**
 * Result message for VerifiedAccess.VerifyChallengeResponse.
**/
var VerifyChallengeResponseResult = /** @class */ (function (_super) {
    __extends(VerifyChallengeResponseResult, _super);
    function VerifyChallengeResponseResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], VerifyChallengeResponseResult.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "json, name=devicePermanentId" }),
        __metadata("design:type", String)
    ], VerifyChallengeResponseResult.prototype, "devicePermanentId", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceSignal" }),
        __metadata("design:type", String)
    ], VerifyChallengeResponseResult.prototype, "deviceSignal", void 0);
    __decorate([
        Metadata({ data: "json, name=keyTrustLevel" }),
        __metadata("design:type", String)
    ], VerifyChallengeResponseResult.prototype, "keyTrustLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=signedPublicKeyAndChallenge" }),
        __metadata("design:type", String)
    ], VerifyChallengeResponseResult.prototype, "signedPublicKeyAndChallenge", void 0);
    __decorate([
        Metadata({ data: "json, name=virtualDeviceId" }),
        __metadata("design:type", String)
    ], VerifyChallengeResponseResult.prototype, "virtualDeviceId", void 0);
    return VerifyChallengeResponseResult;
}(SpeakeasyBase));
export { VerifyChallengeResponseResult };
