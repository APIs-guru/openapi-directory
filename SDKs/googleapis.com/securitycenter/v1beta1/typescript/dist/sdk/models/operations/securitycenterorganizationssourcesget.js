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
var SecuritycenterOrganizationsSourcesGetPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesGetPathParams, _super);
    function SecuritycenterOrganizationsSourcesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetPathParams.prototype, "name", void 0);
    return SecuritycenterOrganizationsSourcesGetPathParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesGetPathParams };
var SecuritycenterOrganizationsSourcesGetQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesGetQueryParams, _super);
    function SecuritycenterOrganizationsSourcesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterOrganizationsSourcesGetQueryParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesGetQueryParams };
var SecuritycenterOrganizationsSourcesGetSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesGetSecurity, _super);
    function SecuritycenterOrganizationsSourcesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterOrganizationsSourcesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterOrganizationsSourcesGetSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterOrganizationsSourcesGetSecurity;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesGetSecurity };
var SecuritycenterOrganizationsSourcesGetRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesGetRequest, _super);
    function SecuritycenterOrganizationsSourcesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesGetPathParams)
    ], SecuritycenterOrganizationsSourcesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesGetQueryParams)
    ], SecuritycenterOrganizationsSourcesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesGetSecurity)
    ], SecuritycenterOrganizationsSourcesGetRequest.prototype, "security", void 0);
    return SecuritycenterOrganizationsSourcesGetRequest;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesGetRequest };
var SecuritycenterOrganizationsSourcesGetResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesGetResponse, _super);
    function SecuritycenterOrganizationsSourcesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Source)
    ], SecuritycenterOrganizationsSourcesGetResponse.prototype, "source", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsSourcesGetResponse.prototype, "statusCode", void 0);
    return SecuritycenterOrganizationsSourcesGetResponse;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesGetResponse };
