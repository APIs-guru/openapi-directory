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
var IdentitytoolkitRelyingpartyVerifyAssertionQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyAssertionQueryParams, _super);
    function IdentitytoolkitRelyingpartyVerifyAssertionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyAssertionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyAssertionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyAssertionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyAssertionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyVerifyAssertionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyAssertionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyAssertionQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyVerifyAssertionQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyAssertionQueryParams };
var IdentitytoolkitRelyingpartyVerifyAssertionSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyAssertionSecurity, _super);
    function IdentitytoolkitRelyingpartyVerifyAssertionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyVerifyAssertionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyVerifyAssertionSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyVerifyAssertionSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyAssertionSecurity };
var IdentitytoolkitRelyingpartyVerifyAssertionRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyAssertionRequest, _super);
    function IdentitytoolkitRelyingpartyVerifyAssertionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyVerifyAssertionQueryParams)
    ], IdentitytoolkitRelyingpartyVerifyAssertionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IdentitytoolkitRelyingpartyVerifyAssertionRequest)
    ], IdentitytoolkitRelyingpartyVerifyAssertionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyVerifyAssertionSecurity)
    ], IdentitytoolkitRelyingpartyVerifyAssertionRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyVerifyAssertionRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyAssertionRequest };
var IdentitytoolkitRelyingpartyVerifyAssertionResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyAssertionResponse, _super);
    function IdentitytoolkitRelyingpartyVerifyAssertionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyAssertionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyVerifyAssertionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyAssertionResponse)
    ], IdentitytoolkitRelyingpartyVerifyAssertionResponse.prototype, "verifyAssertionResponse", void 0);
    return IdentitytoolkitRelyingpartyVerifyAssertionResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyAssertionResponse };
