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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var IntegrationsProjectsLocationsAppsScriptProjectsLinkPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsAppsScriptProjectsLinkPathParams, _super);
    function IntegrationsProjectsLocationsAppsScriptProjectsLinkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkPathParams.prototype, "parent", void 0);
    return IntegrationsProjectsLocationsAppsScriptProjectsLinkPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsAppsScriptProjectsLinkPathParams };
var IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams, _super);
    function IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams };
var IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity, _super);
    function IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity };
var IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest, _super);
    function IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsAppsScriptProjectsLinkPathParams)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest };
var IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse, _super);
    function IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse.prototype, "googleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse };
