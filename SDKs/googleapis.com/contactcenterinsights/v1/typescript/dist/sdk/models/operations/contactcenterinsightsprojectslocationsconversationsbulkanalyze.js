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
var ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams, _super);
    function ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams.prototype, "parent", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams };
var ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams };
var ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity, _super);
    function ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity };
var ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest, _super);
    function ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest };
var ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse, _super);
    function ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse };
