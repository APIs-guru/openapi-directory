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
var CloudbillingBillingAccountsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetPathParams, _super);
    function CloudbillingBillingAccountsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetPathParams.prototype, "name", void 0);
    return CloudbillingBillingAccountsGetPathParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetPathParams };
var CloudbillingBillingAccountsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetQueryParams, _super);
    function CloudbillingBillingAccountsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingBillingAccountsGetQueryParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetQueryParams };
var CloudbillingBillingAccountsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetSecurityOption1, _super);
    function CloudbillingBillingAccountsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetSecurityOption1 };
var CloudbillingBillingAccountsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetSecurityOption2, _super);
    function CloudbillingBillingAccountsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetSecurityOption2 };
var CloudbillingBillingAccountsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetSecurityOption3, _super);
    function CloudbillingBillingAccountsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsGetSecurityOption3;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetSecurityOption3 };
var CloudbillingBillingAccountsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetSecurity, _super);
    function CloudbillingBillingAccountsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsGetSecurityOption1)
    ], CloudbillingBillingAccountsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsGetSecurityOption2)
    ], CloudbillingBillingAccountsGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsGetSecurityOption3)
    ], CloudbillingBillingAccountsGetSecurity.prototype, "option3", void 0);
    return CloudbillingBillingAccountsGetSecurity;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetSecurity };
var CloudbillingBillingAccountsGetRequest = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetRequest, _super);
    function CloudbillingBillingAccountsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsGetPathParams)
    ], CloudbillingBillingAccountsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsGetQueryParams)
    ], CloudbillingBillingAccountsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsGetSecurity)
    ], CloudbillingBillingAccountsGetRequest.prototype, "security", void 0);
    return CloudbillingBillingAccountsGetRequest;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetRequest };
var CloudbillingBillingAccountsGetResponse = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetResponse, _super);
    function CloudbillingBillingAccountsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BillingAccount)
    ], CloudbillingBillingAccountsGetResponse.prototype, "billingAccount", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsGetResponse.prototype, "statusCode", void 0);
    return CloudbillingBillingAccountsGetResponse;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetResponse };
