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
var CloudbillingBillingAccountsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsCreateQueryParams, _super);
    function CloudbillingBillingAccountsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingBillingAccountsCreateQueryParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsCreateQueryParams };
var CloudbillingBillingAccountsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsCreateSecurityOption1, _super);
    function CloudbillingBillingAccountsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsCreateSecurityOption1 };
var CloudbillingBillingAccountsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsCreateSecurityOption2, _super);
    function CloudbillingBillingAccountsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsCreateSecurityOption2 };
var CloudbillingBillingAccountsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsCreateSecurity, _super);
    function CloudbillingBillingAccountsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsCreateSecurityOption1)
    ], CloudbillingBillingAccountsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsCreateSecurityOption2)
    ], CloudbillingBillingAccountsCreateSecurity.prototype, "option2", void 0);
    return CloudbillingBillingAccountsCreateSecurity;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsCreateSecurity };
var CloudbillingBillingAccountsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsCreateRequest, _super);
    function CloudbillingBillingAccountsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsCreateQueryParams)
    ], CloudbillingBillingAccountsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BillingAccountInput)
    ], CloudbillingBillingAccountsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsCreateSecurity)
    ], CloudbillingBillingAccountsCreateRequest.prototype, "security", void 0);
    return CloudbillingBillingAccountsCreateRequest;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsCreateRequest };
var CloudbillingBillingAccountsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsCreateResponse, _super);
    function CloudbillingBillingAccountsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BillingAccount)
    ], CloudbillingBillingAccountsCreateResponse.prototype, "billingAccount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsCreateResponse.prototype, "statusCode", void 0);
    return CloudbillingBillingAccountsCreateResponse;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsCreateResponse };
