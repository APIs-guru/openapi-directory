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
import * as shared from "../shared";
var IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams, _super);
    function IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams };
var IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity, _super);
    function IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity };
var IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest, _super);
    function IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitV2WithdrawMfaRequest)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest.prototype, "security", void 0);
    return IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest };
var IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse, _super);
    function IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse.prototype, "googleCloudIdentitytoolkitV2WithdrawMfaResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse };
