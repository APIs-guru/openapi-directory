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
var ContactcenterinsightsProjectsLocationsViewsListPathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsListPathParams, _super);
    function ContactcenterinsightsProjectsLocationsViewsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListPathParams.prototype, "parent", void 0);
    return ContactcenterinsightsProjectsLocationsViewsListPathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsListPathParams };
var ContactcenterinsightsProjectsLocationsViewsListQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsListQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsViewsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsViewsListQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsListQueryParams };
var ContactcenterinsightsProjectsLocationsViewsListSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsListSecurity, _super);
    function ContactcenterinsightsProjectsLocationsViewsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsViewsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsViewsListSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsViewsListSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsListSecurity };
var ContactcenterinsightsProjectsLocationsViewsListRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsListRequest, _super);
    function ContactcenterinsightsProjectsLocationsViewsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsListPathParams)
    ], ContactcenterinsightsProjectsLocationsViewsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsListQueryParams)
    ], ContactcenterinsightsProjectsLocationsViewsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsListSecurity)
    ], ContactcenterinsightsProjectsLocationsViewsListRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsViewsListRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsListRequest };
var ContactcenterinsightsProjectsLocationsViewsListResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsListResponse, _super);
    function ContactcenterinsightsProjectsLocationsViewsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1ListViewsResponse)
    ], ContactcenterinsightsProjectsLocationsViewsListResponse.prototype, "googleCloudContactcenterinsightsV1ListViewsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsViewsListResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsViewsListResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsListResponse };
