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
var CloudbillingServicesSkusListPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingServicesSkusListPathParams, _super);
    function CloudbillingServicesSkusListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListPathParams.prototype, "parent", void 0);
    return CloudbillingServicesSkusListPathParams;
}(SpeakeasyBase));
export { CloudbillingServicesSkusListPathParams };
var CloudbillingServicesSkusListQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingServicesSkusListQueryParams, _super);
    function CloudbillingServicesSkusListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currencyCode" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "currencyCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudbillingServicesSkusListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingServicesSkusListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingServicesSkusListQueryParams;
}(SpeakeasyBase));
export { CloudbillingServicesSkusListQueryParams };
var CloudbillingServicesSkusListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingServicesSkusListSecurityOption1, _super);
    function CloudbillingServicesSkusListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingServicesSkusListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingServicesSkusListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingServicesSkusListSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingServicesSkusListSecurityOption1 };
var CloudbillingServicesSkusListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingServicesSkusListSecurityOption2, _super);
    function CloudbillingServicesSkusListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingServicesSkusListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingServicesSkusListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingServicesSkusListSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingServicesSkusListSecurityOption2 };
var CloudbillingServicesSkusListSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudbillingServicesSkusListSecurityOption3, _super);
    function CloudbillingServicesSkusListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingServicesSkusListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingServicesSkusListSecurityOption3.prototype, "oauth2c", void 0);
    return CloudbillingServicesSkusListSecurityOption3;
}(SpeakeasyBase));
export { CloudbillingServicesSkusListSecurityOption3 };
var CloudbillingServicesSkusListSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingServicesSkusListSecurity, _super);
    function CloudbillingServicesSkusListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingServicesSkusListSecurityOption1)
    ], CloudbillingServicesSkusListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingServicesSkusListSecurityOption2)
    ], CloudbillingServicesSkusListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingServicesSkusListSecurityOption3)
    ], CloudbillingServicesSkusListSecurity.prototype, "option3", void 0);
    return CloudbillingServicesSkusListSecurity;
}(SpeakeasyBase));
export { CloudbillingServicesSkusListSecurity };
var CloudbillingServicesSkusListRequest = /** @class */ (function (_super) {
    __extends(CloudbillingServicesSkusListRequest, _super);
    function CloudbillingServicesSkusListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingServicesSkusListPathParams)
    ], CloudbillingServicesSkusListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingServicesSkusListQueryParams)
    ], CloudbillingServicesSkusListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingServicesSkusListSecurity)
    ], CloudbillingServicesSkusListRequest.prototype, "security", void 0);
    return CloudbillingServicesSkusListRequest;
}(SpeakeasyBase));
export { CloudbillingServicesSkusListRequest };
var CloudbillingServicesSkusListResponse = /** @class */ (function (_super) {
    __extends(CloudbillingServicesSkusListResponse, _super);
    function CloudbillingServicesSkusListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbillingServicesSkusListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSkusResponse)
    ], CloudbillingServicesSkusListResponse.prototype, "listSkusResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbillingServicesSkusListResponse.prototype, "statusCode", void 0);
    return CloudbillingServicesSkusListResponse;
}(SpeakeasyBase));
export { CloudbillingServicesSkusListResponse };
