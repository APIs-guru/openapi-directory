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
var SecuritycenterOrganizationsAssetsListPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsListPathParams, _super);
    function SecuritycenterOrganizationsAssetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListPathParams.prototype, "parent", void 0);
    return SecuritycenterOrganizationsAssetsListPathParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsListPathParams };
var SecuritycenterOrganizationsAssetsListQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsListQueryParams, _super);
    function SecuritycenterOrganizationsAssetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=compareDuration" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "compareDuration", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fieldMask" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "fieldMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=readTime" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "readTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterOrganizationsAssetsListQueryParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsListQueryParams };
var SecuritycenterOrganizationsAssetsListSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsListSecurity, _super);
    function SecuritycenterOrganizationsAssetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterOrganizationsAssetsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterOrganizationsAssetsListSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterOrganizationsAssetsListSecurity;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsListSecurity };
var SecuritycenterOrganizationsAssetsListRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsListRequest, _super);
    function SecuritycenterOrganizationsAssetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsAssetsListPathParams)
    ], SecuritycenterOrganizationsAssetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsAssetsListQueryParams)
    ], SecuritycenterOrganizationsAssetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsAssetsListSecurity)
    ], SecuritycenterOrganizationsAssetsListRequest.prototype, "security", void 0);
    return SecuritycenterOrganizationsAssetsListRequest;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsListRequest };
var SecuritycenterOrganizationsAssetsListResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsListResponse, _super);
    function SecuritycenterOrganizationsAssetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListAssetsResponse)
    ], SecuritycenterOrganizationsAssetsListResponse.prototype, "listAssetsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsAssetsListResponse.prototype, "statusCode", void 0);
    return SecuritycenterOrganizationsAssetsListResponse;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsListResponse };
