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
var CloudbillingBillingAccountsProjectsListPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsProjectsListPathParams, _super);
    function CloudbillingBillingAccountsProjectsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListPathParams.prototype, "name", void 0);
    return CloudbillingBillingAccountsProjectsListPathParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsProjectsListPathParams };
var CloudbillingBillingAccountsProjectsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsProjectsListQueryParams, _super);
    function CloudbillingBillingAccountsProjectsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingBillingAccountsProjectsListQueryParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsProjectsListQueryParams };
var CloudbillingBillingAccountsProjectsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsProjectsListSecurityOption1, _super);
    function CloudbillingBillingAccountsProjectsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsProjectsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsProjectsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsProjectsListSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsProjectsListSecurityOption1 };
var CloudbillingBillingAccountsProjectsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsProjectsListSecurityOption2, _super);
    function CloudbillingBillingAccountsProjectsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsProjectsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsProjectsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsProjectsListSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsProjectsListSecurityOption2 };
var CloudbillingBillingAccountsProjectsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsProjectsListSecurityOption3, _super);
    function CloudbillingBillingAccountsProjectsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsProjectsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsProjectsListSecurityOption3.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsProjectsListSecurityOption3;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsProjectsListSecurityOption3 };
var CloudbillingBillingAccountsProjectsListSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsProjectsListSecurity, _super);
    function CloudbillingBillingAccountsProjectsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsProjectsListSecurityOption1)
    ], CloudbillingBillingAccountsProjectsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsProjectsListSecurityOption2)
    ], CloudbillingBillingAccountsProjectsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsProjectsListSecurityOption3)
    ], CloudbillingBillingAccountsProjectsListSecurity.prototype, "option3", void 0);
    return CloudbillingBillingAccountsProjectsListSecurity;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsProjectsListSecurity };
var CloudbillingBillingAccountsProjectsListRequest = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsProjectsListRequest, _super);
    function CloudbillingBillingAccountsProjectsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsProjectsListPathParams)
    ], CloudbillingBillingAccountsProjectsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsProjectsListQueryParams)
    ], CloudbillingBillingAccountsProjectsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsProjectsListSecurity)
    ], CloudbillingBillingAccountsProjectsListRequest.prototype, "security", void 0);
    return CloudbillingBillingAccountsProjectsListRequest;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsProjectsListRequest };
var CloudbillingBillingAccountsProjectsListResponse = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsProjectsListResponse, _super);
    function CloudbillingBillingAccountsProjectsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsProjectsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListProjectBillingInfoResponse)
    ], CloudbillingBillingAccountsProjectsListResponse.prototype, "listProjectBillingInfoResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsProjectsListResponse.prototype, "statusCode", void 0);
    return CloudbillingBillingAccountsProjectsListResponse;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsProjectsListResponse };
