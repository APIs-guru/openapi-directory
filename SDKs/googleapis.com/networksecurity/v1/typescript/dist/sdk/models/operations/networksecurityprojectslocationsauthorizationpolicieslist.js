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
var NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams, _super);
    function NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams.prototype, "parent", void 0);
    return NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams };
var NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams, _super);
    function NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams.prototype, "uploadProtocol", void 0);
    return NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams };
var NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity, _super);
    function NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity.prototype, "oauth2c", void 0);
    return NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity };
var NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest, _super);
    function NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest.prototype, "security", void 0);
    return NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest };
var NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse, _super);
    function NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListAuthorizationPoliciesResponse)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse.prototype, "listAuthorizationPoliciesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse.prototype, "statusCode", void 0);
    return NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse };
