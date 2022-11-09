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
var CloudbillingBillingAccountsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsListQueryParams, _super);
    function CloudbillingBillingAccountsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingBillingAccountsListQueryParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsListQueryParams };
var CloudbillingBillingAccountsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsListSecurityOption1, _super);
    function CloudbillingBillingAccountsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsListSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsListSecurityOption1 };
var CloudbillingBillingAccountsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsListSecurityOption2, _super);
    function CloudbillingBillingAccountsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsListSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsListSecurityOption2 };
var CloudbillingBillingAccountsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsListSecurityOption3, _super);
    function CloudbillingBillingAccountsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsListSecurityOption3.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsListSecurityOption3;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsListSecurityOption3 };
var CloudbillingBillingAccountsListSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsListSecurity, _super);
    function CloudbillingBillingAccountsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsListSecurityOption1)
    ], CloudbillingBillingAccountsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsListSecurityOption2)
    ], CloudbillingBillingAccountsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsListSecurityOption3)
    ], CloudbillingBillingAccountsListSecurity.prototype, "option3", void 0);
    return CloudbillingBillingAccountsListSecurity;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsListSecurity };
var CloudbillingBillingAccountsListRequest = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsListRequest, _super);
    function CloudbillingBillingAccountsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsListQueryParams)
    ], CloudbillingBillingAccountsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsListSecurity)
    ], CloudbillingBillingAccountsListRequest.prototype, "security", void 0);
    return CloudbillingBillingAccountsListRequest;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsListRequest };
var CloudbillingBillingAccountsListResponse = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsListResponse, _super);
    function CloudbillingBillingAccountsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListBillingAccountsResponse)
    ], CloudbillingBillingAccountsListResponse.prototype, "listBillingAccountsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsListResponse.prototype, "statusCode", void 0);
    return CloudbillingBillingAccountsListResponse;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsListResponse };
