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
var ContactcenterinsightsProjectsLocationsConversationsIngestPathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsIngestPathParams, _super);
    function ContactcenterinsightsProjectsLocationsConversationsIngestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestPathParams.prototype, "parent", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsIngestPathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsIngestPathParams };
var ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams };
var ContactcenterinsightsProjectsLocationsConversationsIngestSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsIngestSecurity, _super);
    function ContactcenterinsightsProjectsLocationsConversationsIngestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsIngestSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsIngestSecurity };
var ContactcenterinsightsProjectsLocationsConversationsIngestRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsIngestRequest, _super);
    function ContactcenterinsightsProjectsLocationsConversationsIngestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsIngestPathParams)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequest)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsIngestSecurity)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsIngestRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsIngestRequest };
var ContactcenterinsightsProjectsLocationsConversationsIngestResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsIngestResponse, _super);
    function ContactcenterinsightsProjectsLocationsConversationsIngestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsConversationsIngestResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsIngestResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsIngestResponse };
