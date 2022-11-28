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
// Relyingparty
/**
 * Request of getting a code for user confirmation (reset password, change email etc.)
**/
var Relyingparty = /** @class */ (function (_super) {
    __extends(Relyingparty, _super);
    function Relyingparty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidInstallApp" }),
        __metadata("design:type", Boolean)
    ], Relyingparty.prototype, "androidInstallApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidMinimumVersion" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "androidMinimumVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidPackageName" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "androidPackageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canHandleCodeInApp" }),
        __metadata("design:type", Boolean)
    ], Relyingparty.prototype, "canHandleCodeInApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=captchaResp" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "captchaResp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challenge" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "challenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continueUrl" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "continueUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iOSAppStoreId" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "iOsAppStoreId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iOSBundleId" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "iOsBundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idToken" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "idToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newEmail" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "newEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestType" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "requestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userIp" }),
        __metadata("design:type", String)
    ], Relyingparty.prototype, "userIp", void 0);
    return Relyingparty;
}(SpeakeasyBase));
export { Relyingparty };
