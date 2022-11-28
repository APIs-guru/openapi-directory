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
var UpdateOrganizationLoginSecurityPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationLoginSecurityPathParams, _super);
    function UpdateOrganizationLoginSecurityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationLoginSecurityPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationLoginSecurityPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationLoginSecurityPathParams };
var UpdateOrganizationLoginSecurityRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationLoginSecurityRequestBody, _super);
    function UpdateOrganizationLoginSecurityRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountLockoutAttempts" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "accountLockoutAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforceAccountLockout" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "enforceAccountLockout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforceDifferentPasswords" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "enforceDifferentPasswords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforceIdleTimeout" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "enforceIdleTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforceLoginIpRanges" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "enforceLoginIpRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforcePasswordExpiration" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "enforcePasswordExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforceStrongPasswords" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "enforceStrongPasswords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforceTwoFactorAuth" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "enforceTwoFactorAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idleTimeoutMinutes" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "idleTimeoutMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loginIpRanges" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "loginIpRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numDifferentPasswords" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "numDifferentPasswords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordExpirationDays" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationLoginSecurityRequestBody.prototype, "passwordExpirationDays", void 0);
    return UpdateOrganizationLoginSecurityRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationLoginSecurityRequestBody };
var UpdateOrganizationLoginSecurityRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationLoginSecurityRequest, _super);
    function UpdateOrganizationLoginSecurityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationLoginSecurityPathParams)
    ], UpdateOrganizationLoginSecurityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationLoginSecurityRequestBody)
    ], UpdateOrganizationLoginSecurityRequest.prototype, "request", void 0);
    return UpdateOrganizationLoginSecurityRequest;
}(SpeakeasyBase));
export { UpdateOrganizationLoginSecurityRequest };
var UpdateOrganizationLoginSecurityResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationLoginSecurityResponse, _super);
    function UpdateOrganizationLoginSecurityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationLoginSecurityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationLoginSecurityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationLoginSecurityResponse.prototype, "updateOrganizationLoginSecurity200ApplicationJsonObject", void 0);
    return UpdateOrganizationLoginSecurityResponse;
}(SpeakeasyBase));
export { UpdateOrganizationLoginSecurityResponse };
