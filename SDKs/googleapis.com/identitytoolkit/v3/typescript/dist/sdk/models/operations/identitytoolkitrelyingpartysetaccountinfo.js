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
var IdentitytoolkitRelyingpartySetAccountInfoQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartySetAccountInfoQueryParams, _super);
    function IdentitytoolkitRelyingpartySetAccountInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartySetAccountInfoQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartySetAccountInfoQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartySetAccountInfoQueryParams };
var IdentitytoolkitRelyingpartySetAccountInfoSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartySetAccountInfoSecurity, _super);
    function IdentitytoolkitRelyingpartySetAccountInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartySetAccountInfoSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartySetAccountInfoSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartySetAccountInfoSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartySetAccountInfoSecurity };
var IdentitytoolkitRelyingpartySetAccountInfoRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartySetAccountInfoRequest, _super);
    function IdentitytoolkitRelyingpartySetAccountInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartySetAccountInfoQueryParams)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IdentitytoolkitRelyingpartySetAccountInfoRequest)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartySetAccountInfoSecurity)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartySetAccountInfoRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartySetAccountInfoRequest };
var IdentitytoolkitRelyingpartySetAccountInfoResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartySetAccountInfoResponse, _super);
    function IdentitytoolkitRelyingpartySetAccountInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SetAccountInfoResponse)
    ], IdentitytoolkitRelyingpartySetAccountInfoResponse.prototype, "setAccountInfoResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartySetAccountInfoResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitRelyingpartySetAccountInfoResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartySetAccountInfoResponse };
