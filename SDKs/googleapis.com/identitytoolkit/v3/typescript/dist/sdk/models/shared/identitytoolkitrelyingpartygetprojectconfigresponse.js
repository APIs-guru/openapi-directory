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
import { EmailTemplate } from "./emailtemplate";
import { IdpConfig } from "./idpconfig";
// IdentitytoolkitRelyingpartyGetProjectConfigResponse
/**
 * Response of getting the project configuration.
**/
var IdentitytoolkitRelyingpartyGetProjectConfigResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyGetProjectConfigResponse, _super);
    function IdentitytoolkitRelyingpartyGetProjectConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowPasswordUser" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "allowPasswordUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedDomains" }),
        __metadata("design:type", Array)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "authorizedDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeEmailTemplate" }),
        __metadata("design:type", EmailTemplate)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "changeEmailTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicLinksDomain" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "dynamicLinksDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAnonymousUser" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "enableAnonymousUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idpConfig", elemType: IdpConfig }),
        __metadata("design:type", Array)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "idpConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyResetPasswordTemplate" }),
        __metadata("design:type", EmailTemplate)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "legacyResetPasswordTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetPasswordTemplate" }),
        __metadata("design:type", EmailTemplate)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "resetPasswordTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useEmailSending" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "useEmailSending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifyEmailTemplate" }),
        __metadata("design:type", EmailTemplate)
    ], IdentitytoolkitRelyingpartyGetProjectConfigResponse.prototype, "verifyEmailTemplate", void 0);
    return IdentitytoolkitRelyingpartyGetProjectConfigResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyGetProjectConfigResponse };
