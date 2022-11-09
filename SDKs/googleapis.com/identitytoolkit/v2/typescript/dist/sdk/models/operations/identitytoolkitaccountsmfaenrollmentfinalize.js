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
import * as shared from "../shared";
var IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams, _super);
    function IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams };
var IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity, _super);
    function IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity };
var IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest, _super);
    function IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest.prototype, "security", void 0);
    return IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest };
var IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse, _super);
    function IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse.prototype, "googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse };
