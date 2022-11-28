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
var IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams, _super);
    function IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams };
var IdentitytoolkitRelyingpartyEmailLinkSigninSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyEmailLinkSigninSecurity, _super);
    function IdentitytoolkitRelyingpartyEmailLinkSigninSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyEmailLinkSigninSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyEmailLinkSigninSecurity };
var IdentitytoolkitRelyingpartyEmailLinkSigninRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyEmailLinkSigninRequest, _super);
    function IdentitytoolkitRelyingpartyEmailLinkSigninRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IdentitytoolkitRelyingpartyEmailLinkSigninRequest)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyEmailLinkSigninSecurity)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyEmailLinkSigninRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyEmailLinkSigninRequest };
var IdentitytoolkitRelyingpartyEmailLinkSigninResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyEmailLinkSigninResponse, _super);
    function IdentitytoolkitRelyingpartyEmailLinkSigninResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EmailLinkSigninResponse)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninResponse.prototype, "emailLinkSigninResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyEmailLinkSigninResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitRelyingpartyEmailLinkSigninResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyEmailLinkSigninResponse };
