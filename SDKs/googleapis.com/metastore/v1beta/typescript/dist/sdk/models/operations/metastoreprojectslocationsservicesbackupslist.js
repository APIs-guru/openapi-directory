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
var MetastoreProjectsLocationsServicesBackupsListPathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsListPathParams, _super);
    function MetastoreProjectsLocationsServicesBackupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListPathParams.prototype, "parent", void 0);
    return MetastoreProjectsLocationsServicesBackupsListPathParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsListPathParams };
var MetastoreProjectsLocationsServicesBackupsListQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsListQueryParams, _super);
    function MetastoreProjectsLocationsServicesBackupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsServicesBackupsListQueryParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsListQueryParams };
var MetastoreProjectsLocationsServicesBackupsListSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsListSecurity, _super);
    function MetastoreProjectsLocationsServicesBackupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsServicesBackupsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsServicesBackupsListSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsServicesBackupsListSecurity;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsListSecurity };
var MetastoreProjectsLocationsServicesBackupsListRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsListRequest, _super);
    function MetastoreProjectsLocationsServicesBackupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesBackupsListPathParams)
    ], MetastoreProjectsLocationsServicesBackupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesBackupsListQueryParams)
    ], MetastoreProjectsLocationsServicesBackupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesBackupsListSecurity)
    ], MetastoreProjectsLocationsServicesBackupsListRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsServicesBackupsListRequest;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsListRequest };
var MetastoreProjectsLocationsServicesBackupsListResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsListResponse, _super);
    function MetastoreProjectsLocationsServicesBackupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListBackupsResponse)
    ], MetastoreProjectsLocationsServicesBackupsListResponse.prototype, "listBackupsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesBackupsListResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsServicesBackupsListResponse;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsListResponse };
