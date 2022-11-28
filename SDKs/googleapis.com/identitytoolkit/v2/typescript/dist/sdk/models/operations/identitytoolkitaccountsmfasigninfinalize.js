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
var IdentitytoolkitAccountsMfaSignInFinalizeQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaSignInFinalizeQueryParams, _super);
    function IdentitytoolkitAccountsMfaSignInFinalizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitAccountsMfaSignInFinalizeQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaSignInFinalizeQueryParams };
var IdentitytoolkitAccountsMfaSignInFinalizeSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaSignInFinalizeSecurity, _super);
    function IdentitytoolkitAccountsMfaSignInFinalizeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitAccountsMfaSignInFinalizeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitAccountsMfaSignInFinalizeSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitAccountsMfaSignInFinalizeSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaSignInFinalizeSecurity };
var IdentitytoolkitAccountsMfaSignInFinalizeRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaSignInFinalizeRequest, _super);
    function IdentitytoolkitAccountsMfaSignInFinalizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitAccountsMfaSignInFinalizeQueryParams)
    ], IdentitytoolkitAccountsMfaSignInFinalizeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest)
    ], IdentitytoolkitAccountsMfaSignInFinalizeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitAccountsMfaSignInFinalizeSecurity)
    ], IdentitytoolkitAccountsMfaSignInFinalizeRequest.prototype, "security", void 0);
    return IdentitytoolkitAccountsMfaSignInFinalizeRequest;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaSignInFinalizeRequest };
var IdentitytoolkitAccountsMfaSignInFinalizeResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitAccountsMfaSignInFinalizeResponse, _super);
    function IdentitytoolkitAccountsMfaSignInFinalizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitAccountsMfaSignInFinalizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse)
    ], IdentitytoolkitAccountsMfaSignInFinalizeResponse.prototype, "googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitAccountsMfaSignInFinalizeResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitAccountsMfaSignInFinalizeResponse;
}(SpeakeasyBase));
export { IdentitytoolkitAccountsMfaSignInFinalizeResponse };
