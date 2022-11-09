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
var GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams.prototype, "name", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams };
var GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=etag" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "force", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams };
var GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity };
var GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest };
var GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse };
