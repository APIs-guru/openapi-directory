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
var OrgpolicyOrganizationsCustomConstraintsListPathParams = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsListPathParams, _super);
    function OrgpolicyOrganizationsCustomConstraintsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListPathParams.prototype, "parent", void 0);
    return OrgpolicyOrganizationsCustomConstraintsListPathParams;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsListPathParams };
var OrgpolicyOrganizationsCustomConstraintsListQueryParams = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsListQueryParams, _super);
    function OrgpolicyOrganizationsCustomConstraintsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListQueryParams.prototype, "uploadProtocol", void 0);
    return OrgpolicyOrganizationsCustomConstraintsListQueryParams;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsListQueryParams };
var OrgpolicyOrganizationsCustomConstraintsListSecurity = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsListSecurity, _super);
    function OrgpolicyOrganizationsCustomConstraintsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OrgpolicyOrganizationsCustomConstraintsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OrgpolicyOrganizationsCustomConstraintsListSecurity.prototype, "oauth2c", void 0);
    return OrgpolicyOrganizationsCustomConstraintsListSecurity;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsListSecurity };
var OrgpolicyOrganizationsCustomConstraintsListRequest = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsListRequest, _super);
    function OrgpolicyOrganizationsCustomConstraintsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyOrganizationsCustomConstraintsListPathParams)
    ], OrgpolicyOrganizationsCustomConstraintsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyOrganizationsCustomConstraintsListQueryParams)
    ], OrgpolicyOrganizationsCustomConstraintsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyOrganizationsCustomConstraintsListSecurity)
    ], OrgpolicyOrganizationsCustomConstraintsListRequest.prototype, "security", void 0);
    return OrgpolicyOrganizationsCustomConstraintsListRequest;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsListRequest };
var OrgpolicyOrganizationsCustomConstraintsListResponse = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsListResponse, _super);
    function OrgpolicyOrganizationsCustomConstraintsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudOrgpolicyV2ListCustomConstraintsResponse)
    ], OrgpolicyOrganizationsCustomConstraintsListResponse.prototype, "googleCloudOrgpolicyV2ListCustomConstraintsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OrgpolicyOrganizationsCustomConstraintsListResponse.prototype, "statusCode", void 0);
    return OrgpolicyOrganizationsCustomConstraintsListResponse;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsListResponse };
