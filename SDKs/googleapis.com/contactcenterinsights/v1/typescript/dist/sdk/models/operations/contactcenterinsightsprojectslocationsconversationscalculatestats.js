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
var ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams.prototype, "location", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams };
var ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams };
var ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity };
var ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest };
var ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponse)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse.prototype, "googleCloudContactcenterinsightsV1CalculateStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse };
