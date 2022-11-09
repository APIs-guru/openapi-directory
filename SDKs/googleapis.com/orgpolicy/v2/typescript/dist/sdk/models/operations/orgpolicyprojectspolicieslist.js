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
var OrgpolicyProjectsPoliciesListPathParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesListPathParams, _super);
    function OrgpolicyProjectsPoliciesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListPathParams.prototype, "parent", void 0);
    return OrgpolicyProjectsPoliciesListPathParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesListPathParams };
var OrgpolicyProjectsPoliciesListQueryParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesListQueryParams, _super);
    function OrgpolicyProjectsPoliciesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListQueryParams.prototype, "uploadProtocol", void 0);
    return OrgpolicyProjectsPoliciesListQueryParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesListQueryParams };
var OrgpolicyProjectsPoliciesListSecurity = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesListSecurity, _super);
    function OrgpolicyProjectsPoliciesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OrgpolicyProjectsPoliciesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OrgpolicyProjectsPoliciesListSecurity.prototype, "oauth2c", void 0);
    return OrgpolicyProjectsPoliciesListSecurity;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesListSecurity };
var OrgpolicyProjectsPoliciesListRequest = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesListRequest, _super);
    function OrgpolicyProjectsPoliciesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesListPathParams)
    ], OrgpolicyProjectsPoliciesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesListQueryParams)
    ], OrgpolicyProjectsPoliciesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesListSecurity)
    ], OrgpolicyProjectsPoliciesListRequest.prototype, "security", void 0);
    return OrgpolicyProjectsPoliciesListRequest;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesListRequest };
var OrgpolicyProjectsPoliciesListResponse = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesListResponse, _super);
    function OrgpolicyProjectsPoliciesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudOrgpolicyV2ListPoliciesResponse)
    ], OrgpolicyProjectsPoliciesListResponse.prototype, "googleCloudOrgpolicyV2ListPoliciesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OrgpolicyProjectsPoliciesListResponse.prototype, "statusCode", void 0);
    return OrgpolicyProjectsPoliciesListResponse;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesListResponse };
