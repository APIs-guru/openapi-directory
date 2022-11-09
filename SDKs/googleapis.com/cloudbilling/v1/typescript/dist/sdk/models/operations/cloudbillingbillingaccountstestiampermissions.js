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
var CloudbillingBillingAccountsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsTestIamPermissionsPathParams, _super);
    function CloudbillingBillingAccountsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return CloudbillingBillingAccountsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsTestIamPermissionsPathParams };
var CloudbillingBillingAccountsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsTestIamPermissionsQueryParams, _super);
    function CloudbillingBillingAccountsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingBillingAccountsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsTestIamPermissionsQueryParams };
var CloudbillingBillingAccountsTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsTestIamPermissionsSecurityOption1, _super);
    function CloudbillingBillingAccountsTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsTestIamPermissionsSecurityOption1 };
var CloudbillingBillingAccountsTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsTestIamPermissionsSecurityOption2, _super);
    function CloudbillingBillingAccountsTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsTestIamPermissionsSecurityOption2 };
var CloudbillingBillingAccountsTestIamPermissionsSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsTestIamPermissionsSecurityOption3, _super);
    function CloudbillingBillingAccountsTestIamPermissionsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsTestIamPermissionsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsTestIamPermissionsSecurityOption3.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsTestIamPermissionsSecurityOption3;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsTestIamPermissionsSecurityOption3 };
var CloudbillingBillingAccountsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsTestIamPermissionsSecurity, _super);
    function CloudbillingBillingAccountsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsTestIamPermissionsSecurityOption1)
    ], CloudbillingBillingAccountsTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsTestIamPermissionsSecurityOption2)
    ], CloudbillingBillingAccountsTestIamPermissionsSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsTestIamPermissionsSecurityOption3)
    ], CloudbillingBillingAccountsTestIamPermissionsSecurity.prototype, "option3", void 0);
    return CloudbillingBillingAccountsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsTestIamPermissionsSecurity };
var CloudbillingBillingAccountsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsTestIamPermissionsRequest, _super);
    function CloudbillingBillingAccountsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsTestIamPermissionsPathParams)
    ], CloudbillingBillingAccountsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsTestIamPermissionsQueryParams)
    ], CloudbillingBillingAccountsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], CloudbillingBillingAccountsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsTestIamPermissionsSecurity)
    ], CloudbillingBillingAccountsTestIamPermissionsRequest.prototype, "security", void 0);
    return CloudbillingBillingAccountsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsTestIamPermissionsRequest };
var CloudbillingBillingAccountsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsTestIamPermissionsResponse, _super);
    function CloudbillingBillingAccountsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], CloudbillingBillingAccountsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return CloudbillingBillingAccountsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsTestIamPermissionsResponse };
