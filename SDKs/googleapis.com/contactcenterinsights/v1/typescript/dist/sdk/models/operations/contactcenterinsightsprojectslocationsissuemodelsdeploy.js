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
var ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams.prototype, "name", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams };
var ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams };
var ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity };
var ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1DeployIssueModelRequest)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest };
var ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse };
