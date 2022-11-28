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
var ContactcenterinsightsProjectsLocationsViewsGetPathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsGetPathParams, _super);
    function ContactcenterinsightsProjectsLocationsViewsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetPathParams.prototype, "name", void 0);
    return ContactcenterinsightsProjectsLocationsViewsGetPathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsGetPathParams };
export var ContactcenterinsightsProjectsLocationsViewsGetViewEnum;
(function (ContactcenterinsightsProjectsLocationsViewsGetViewEnum) {
    ContactcenterinsightsProjectsLocationsViewsGetViewEnum["ConversationViewUnspecified"] = "CONVERSATION_VIEW_UNSPECIFIED";
    ContactcenterinsightsProjectsLocationsViewsGetViewEnum["Full"] = "FULL";
    ContactcenterinsightsProjectsLocationsViewsGetViewEnum["Basic"] = "BASIC";
})(ContactcenterinsightsProjectsLocationsViewsGetViewEnum || (ContactcenterinsightsProjectsLocationsViewsGetViewEnum = {}));
var ContactcenterinsightsProjectsLocationsViewsGetQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsGetQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsViewsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetQueryParams.prototype, "view", void 0);
    return ContactcenterinsightsProjectsLocationsViewsGetQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsGetQueryParams };
var ContactcenterinsightsProjectsLocationsViewsGetSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsGetSecurity, _super);
    function ContactcenterinsightsProjectsLocationsViewsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsViewsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsViewsGetSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsViewsGetSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsGetSecurity };
var ContactcenterinsightsProjectsLocationsViewsGetRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsGetRequest, _super);
    function ContactcenterinsightsProjectsLocationsViewsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsGetPathParams)
    ], ContactcenterinsightsProjectsLocationsViewsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsGetQueryParams)
    ], ContactcenterinsightsProjectsLocationsViewsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsGetSecurity)
    ], ContactcenterinsightsProjectsLocationsViewsGetRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsViewsGetRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsGetRequest };
var ContactcenterinsightsProjectsLocationsViewsGetResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsGetResponse, _super);
    function ContactcenterinsightsProjectsLocationsViewsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1View)
    ], ContactcenterinsightsProjectsLocationsViewsGetResponse.prototype, "googleCloudContactcenterinsightsV1View", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsViewsGetResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsViewsGetResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsGetResponse };
