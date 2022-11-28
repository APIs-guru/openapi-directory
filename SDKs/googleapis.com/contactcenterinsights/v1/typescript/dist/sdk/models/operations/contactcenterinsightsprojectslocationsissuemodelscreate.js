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
var ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams.prototype, "parent", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams };
var ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams };
var ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity };
var ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1IssueModelInput)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest };
var ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse, _super);
    function ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse };
