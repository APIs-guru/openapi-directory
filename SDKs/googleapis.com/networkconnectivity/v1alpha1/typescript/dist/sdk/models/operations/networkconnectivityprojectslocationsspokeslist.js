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
var NetworkconnectivityProjectsLocationsSpokesListPathParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesListPathParams, _super);
    function NetworkconnectivityProjectsLocationsSpokesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListPathParams.prototype, "parent", void 0);
    return NetworkconnectivityProjectsLocationsSpokesListPathParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesListPathParams };
var NetworkconnectivityProjectsLocationsSpokesListQueryParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesListQueryParams, _super);
    function NetworkconnectivityProjectsLocationsSpokesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkconnectivityProjectsLocationsSpokesListQueryParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesListQueryParams };
var NetworkconnectivityProjectsLocationsSpokesListSecurity = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesListSecurity, _super);
    function NetworkconnectivityProjectsLocationsSpokesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkconnectivityProjectsLocationsSpokesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkconnectivityProjectsLocationsSpokesListSecurity.prototype, "oauth2c", void 0);
    return NetworkconnectivityProjectsLocationsSpokesListSecurity;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesListSecurity };
var NetworkconnectivityProjectsLocationsSpokesListRequest = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesListRequest, _super);
    function NetworkconnectivityProjectsLocationsSpokesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesListPathParams)
    ], NetworkconnectivityProjectsLocationsSpokesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesListQueryParams)
    ], NetworkconnectivityProjectsLocationsSpokesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesListSecurity)
    ], NetworkconnectivityProjectsLocationsSpokesListRequest.prototype, "security", void 0);
    return NetworkconnectivityProjectsLocationsSpokesListRequest;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesListRequest };
var NetworkconnectivityProjectsLocationsSpokesListResponse = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesListResponse, _super);
    function NetworkconnectivityProjectsLocationsSpokesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSpokesResponse)
    ], NetworkconnectivityProjectsLocationsSpokesListResponse.prototype, "listSpokesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsSpokesListResponse.prototype, "statusCode", void 0);
    return NetworkconnectivityProjectsLocationsSpokesListResponse;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesListResponse };
