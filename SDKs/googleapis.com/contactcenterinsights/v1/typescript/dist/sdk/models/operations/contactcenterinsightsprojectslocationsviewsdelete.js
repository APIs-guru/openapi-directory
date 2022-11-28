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
var ContactcenterinsightsProjectsLocationsViewsDeletePathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsDeletePathParams, _super);
    function ContactcenterinsightsProjectsLocationsViewsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeletePathParams.prototype, "name", void 0);
    return ContactcenterinsightsProjectsLocationsViewsDeletePathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsDeletePathParams };
var ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams };
var ContactcenterinsightsProjectsLocationsViewsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsDeleteSecurity, _super);
    function ContactcenterinsightsProjectsLocationsViewsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsViewsDeleteSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsDeleteSecurity };
var ContactcenterinsightsProjectsLocationsViewsDeleteRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsDeleteRequest, _super);
    function ContactcenterinsightsProjectsLocationsViewsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsDeletePathParams)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsViewsDeleteSecurity)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsViewsDeleteRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsDeleteRequest };
var ContactcenterinsightsProjectsLocationsViewsDeleteResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsViewsDeleteResponse, _super);
    function ContactcenterinsightsProjectsLocationsViewsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsViewsDeleteResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsViewsDeleteResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsViewsDeleteResponse };
