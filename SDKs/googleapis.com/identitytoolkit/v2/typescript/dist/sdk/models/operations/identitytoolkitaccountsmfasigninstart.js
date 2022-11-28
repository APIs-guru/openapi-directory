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
var IdentitytoolkitAccountsMfaSignInStartQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaSignInStartQueryParams, _super);
    function IdentitytoolkitAccountsMfaSignInStartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitAccountsMfaSignInStartQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaSignInStartQueryParams };
var IdentitytoolkitAccountsMfaSignInStartSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaSignInStartSecurity, _super);
    function IdentitytoolkitAccountsMfaSignInStartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitAccountsMfaSignInStartSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitAccountsMfaSignInStartSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitAccountsMfaSignInStartSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaSignInStartSecurity };
var IdentitytoolkitAccountsMfaSignInStartRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaSignInStartRequest, _super);
    function IdentitytoolkitAccountsMfaSignInStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitAccountsMfaSignInStartQueryParams)
    ], IdentitytoolkitAccountsMfaSignInStartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitV2StartMfaSignInRequest)
    ], IdentitytoolkitAccountsMfaSignInStartRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitAccountsMfaSignInStartSecurity)
    ], IdentitytoolkitAccountsMfaSignInStartRequest.prototype, "security", void 0);
    return IdentitytoolkitAccountsMfaSignInStartRequest;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaSignInStartRequest };
var IdentitytoolkitAccountsMfaSignInStartResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaSignInStartResponse, _super);
    function IdentitytoolkitAccountsMfaSignInStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse)
    ], IdentitytoolkitAccountsMfaSignInStartResponse.prototype, "googleCloudIdentitytoolkitV2StartMfaSignInResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitAccountsMfaSignInStartResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitAccountsMfaSignInStartResponse;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaSignInStartResponse };
