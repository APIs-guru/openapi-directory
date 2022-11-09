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
var GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams.prototype, "parent", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams };
var GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=restoreId" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "restoreId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams };
var GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity };
var GkebackupProjectsLocationsRestorePlansRestoresCreateRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresCreateRequest, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Restore)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresCreateRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresCreateRequest };
var GkebackupProjectsLocationsRestorePlansRestoresCreateResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresCreateResponse, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansRestoresCreateResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresCreateResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresCreateResponse };
