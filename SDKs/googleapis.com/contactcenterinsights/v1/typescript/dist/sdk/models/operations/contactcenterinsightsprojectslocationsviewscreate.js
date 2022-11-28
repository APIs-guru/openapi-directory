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
var ContactcenterinsightsProjectsLocationsViewsCreatePathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsCreatePathParams, _super);
    function ContactcenterinsightsProjectsLocationsViewsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreatePathParams.prototype, "parent", void 0);
    return ContactcenterinsightsProjectsLocationsViewsCreatePathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsCreatePathParams };
var ContactcenterinsightsProjectsLocationsViewsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsCreateQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsViewsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsViewsCreateQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsCreateQueryParams };
var ContactcenterinsightsProjectsLocationsViewsCreateSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsCreateSecurity, _super);
    function ContactcenterinsightsProjectsLocationsViewsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsViewsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsViewsCreateSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsViewsCreateSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsCreateSecurity };
var ContactcenterinsightsProjectsLocationsViewsCreateRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsCreateRequest, _super);
    function ContactcenterinsightsProjectsLocationsViewsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsCreatePathParams)
    ], ContactcenterinsightsProjectsLocationsViewsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsCreateQueryParams)
    ], ContactcenterinsightsProjectsLocationsViewsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1ViewInput)
    ], ContactcenterinsightsProjectsLocationsViewsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsCreateSecurity)
    ], ContactcenterinsightsProjectsLocationsViewsCreateRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsViewsCreateRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsCreateRequest };
var ContactcenterinsightsProjectsLocationsViewsCreateResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsCreateResponse, _super);
    function ContactcenterinsightsProjectsLocationsViewsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1View)
    ], ContactcenterinsightsProjectsLocationsViewsCreateResponse.prototype, "googleCloudContactcenterinsightsV1View", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsViewsCreateResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsViewsCreateResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsCreateResponse };
