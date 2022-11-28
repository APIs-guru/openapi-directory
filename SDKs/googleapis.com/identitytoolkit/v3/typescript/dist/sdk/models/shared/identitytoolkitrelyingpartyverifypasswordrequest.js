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
// IdentitytoolkitRelyingpartyVerifyPasswordRequest
/**
 * Request to verify the password.
**/
var IdentitytoolkitRelyingpartyVerifyPasswordRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyPasswordRequest, _super);
    function IdentitytoolkitRelyingpartyVerifyPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=captchaChallenge" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "captchaChallenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=captchaResponse" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "captchaResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "delegatedProjectNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idToken" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "idToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingIdToken" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "pendingIdToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnSecureToken" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "returnSecureToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenantId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenantProjectNumber" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "tenantProjectNumber", void 0);
    return IdentitytoolkitRelyingpartyVerifyPasswordRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyPasswordRequest };
