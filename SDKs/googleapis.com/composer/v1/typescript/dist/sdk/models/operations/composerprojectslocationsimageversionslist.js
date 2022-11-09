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
var ComposerProjectsLocationsImageVersionsListPathParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsImageVersionsListPathParams, _super);
    function ComposerProjectsLocationsImageVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListPathParams.prototype, "parent", void 0);
    return ComposerProjectsLocationsImageVersionsListPathParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsImageVersionsListPathParams };
var ComposerProjectsLocationsImageVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsImageVersionsListQueryParams, _super);
    function ComposerProjectsLocationsImageVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includePastReleases" }),
        __metadata("design:type", Boolean)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "includePastReleases", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    return ComposerProjectsLocationsImageVersionsListQueryParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsImageVersionsListQueryParams };
var ComposerProjectsLocationsImageVersionsListSecurity = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsImageVersionsListSecurity, _super);
    function ComposerProjectsLocationsImageVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ComposerProjectsLocationsImageVersionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ComposerProjectsLocationsImageVersionsListSecurity.prototype, "oauth2c", void 0);
    return ComposerProjectsLocationsImageVersionsListSecurity;
}(SpeakeasyBase));
export { ComposerProjectsLocationsImageVersionsListSecurity };
var ComposerProjectsLocationsImageVersionsListRequest = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsImageVersionsListRequest, _super);
    function ComposerProjectsLocationsImageVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsImageVersionsListPathParams)
    ], ComposerProjectsLocationsImageVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsImageVersionsListQueryParams)
    ], ComposerProjectsLocationsImageVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsImageVersionsListSecurity)
    ], ComposerProjectsLocationsImageVersionsListRequest.prototype, "security", void 0);
    return ComposerProjectsLocationsImageVersionsListRequest;
}(SpeakeasyBase));
export { ComposerProjectsLocationsImageVersionsListRequest };
var ComposerProjectsLocationsImageVersionsListResponse = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsImageVersionsListResponse, _super);
    function ComposerProjectsLocationsImageVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsImageVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListImageVersionsResponse)
    ], ComposerProjectsLocationsImageVersionsListResponse.prototype, "listImageVersionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComposerProjectsLocationsImageVersionsListResponse.prototype, "statusCode", void 0);
    return ComposerProjectsLocationsImageVersionsListResponse;
}(SpeakeasyBase));
export { ComposerProjectsLocationsImageVersionsListResponse };
