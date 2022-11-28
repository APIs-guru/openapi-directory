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
var ContentAccountsVerifyphonenumberPathParams = /** @class */ (function (_super) {
    __extends(ContentAccountsVerifyphonenumberPathParams, _super);
    function ContentAccountsVerifyphonenumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberPathParams.prototype, "merchantId", void 0);
    return ContentAccountsVerifyphonenumberPathParams;
}(SpeakeasyBase));
export { ContentAccountsVerifyphonenumberPathParams };
var ContentAccountsVerifyphonenumberQueryParams = /** @class */ (function (_super) {
    __extends(ContentAccountsVerifyphonenumberQueryParams, _super);
    function ContentAccountsVerifyphonenumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberQueryParams.prototype, "uploadProtocol", void 0);
    return ContentAccountsVerifyphonenumberQueryParams;
}(SpeakeasyBase));
export { ContentAccountsVerifyphonenumberQueryParams };
var ContentAccountsVerifyphonenumberSecurity = /** @class */ (function (_super) {
    __extends(ContentAccountsVerifyphonenumberSecurity, _super);
    function ContentAccountsVerifyphonenumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentAccountsVerifyphonenumberSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentAccountsVerifyphonenumberSecurity.prototype, "oauth2c", void 0);
    return ContentAccountsVerifyphonenumberSecurity;
}(SpeakeasyBase));
export { ContentAccountsVerifyphonenumberSecurity };
var ContentAccountsVerifyphonenumberRequest = /** @class */ (function (_super) {
    __extends(ContentAccountsVerifyphonenumberRequest, _super);
    function ContentAccountsVerifyphonenumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsVerifyphonenumberPathParams)
    ], ContentAccountsVerifyphonenumberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsVerifyphonenumberQueryParams)
    ], ContentAccountsVerifyphonenumberRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.VerifyPhoneNumberRequest)
    ], ContentAccountsVerifyphonenumberRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsVerifyphonenumberSecurity)
    ], ContentAccountsVerifyphonenumberRequest.prototype, "security", void 0);
    return ContentAccountsVerifyphonenumberRequest;
}(SpeakeasyBase));
export { ContentAccountsVerifyphonenumberRequest };
var ContentAccountsVerifyphonenumberResponse = /** @class */ (function (_super) {
    __extends(ContentAccountsVerifyphonenumberResponse, _super);
    function ContentAccountsVerifyphonenumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentAccountsVerifyphonenumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentAccountsVerifyphonenumberResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyPhoneNumberResponse)
    ], ContentAccountsVerifyphonenumberResponse.prototype, "verifyPhoneNumberResponse", void 0);
    return ContentAccountsVerifyphonenumberResponse;
}(SpeakeasyBase));
export { ContentAccountsVerifyphonenumberResponse };
