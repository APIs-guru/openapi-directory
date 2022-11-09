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
var NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams.prototype, "parent", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams };
var NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams.prototype, "uploadProtocol", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams };
var NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity.prototype, "oauth2c", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity };
var NetworksecurityProjectsLocationsServerTlsPoliciesListRequest = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesListRequest, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListRequest.prototype, "security", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesListRequest;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesListRequest };
var NetworksecurityProjectsLocationsServerTlsPoliciesListResponse = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesListResponse, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListServerTlsPoliciesResponse)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListResponse.prototype, "listServerTlsPoliciesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesListResponse.prototype, "statusCode", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesListResponse;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesListResponse };
