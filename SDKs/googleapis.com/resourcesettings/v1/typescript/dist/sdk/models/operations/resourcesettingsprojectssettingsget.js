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
var ResourcesettingsProjectsSettingsGetPathParams = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsGetPathParams, _super);
    function ResourcesettingsProjectsSettingsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetPathParams.prototype, "name", void 0);
    return ResourcesettingsProjectsSettingsGetPathParams;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsGetPathParams };
export var ResourcesettingsProjectsSettingsGetViewEnum;
(function (ResourcesettingsProjectsSettingsGetViewEnum) {
    ResourcesettingsProjectsSettingsGetViewEnum["SettingViewUnspecified"] = "SETTING_VIEW_UNSPECIFIED";
    ResourcesettingsProjectsSettingsGetViewEnum["SettingViewBasic"] = "SETTING_VIEW_BASIC";
    ResourcesettingsProjectsSettingsGetViewEnum["SettingViewEffectiveValue"] = "SETTING_VIEW_EFFECTIVE_VALUE";
    ResourcesettingsProjectsSettingsGetViewEnum["SettingViewLocalValue"] = "SETTING_VIEW_LOCAL_VALUE";
})(ResourcesettingsProjectsSettingsGetViewEnum || (ResourcesettingsProjectsSettingsGetViewEnum = {}));
var ResourcesettingsProjectsSettingsGetQueryParams = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsGetQueryParams, _super);
    function ResourcesettingsProjectsSettingsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetQueryParams.prototype, "view", void 0);
    return ResourcesettingsProjectsSettingsGetQueryParams;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsGetQueryParams };
var ResourcesettingsProjectsSettingsGetSecurity = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsGetSecurity, _super);
    function ResourcesettingsProjectsSettingsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResourcesettingsProjectsSettingsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResourcesettingsProjectsSettingsGetSecurity.prototype, "oauth2c", void 0);
    return ResourcesettingsProjectsSettingsGetSecurity;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsGetSecurity };
var ResourcesettingsProjectsSettingsGetRequest = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsGetRequest, _super);
    function ResourcesettingsProjectsSettingsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResourcesettingsProjectsSettingsGetPathParams)
    ], ResourcesettingsProjectsSettingsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResourcesettingsProjectsSettingsGetQueryParams)
    ], ResourcesettingsProjectsSettingsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResourcesettingsProjectsSettingsGetSecurity)
    ], ResourcesettingsProjectsSettingsGetRequest.prototype, "security", void 0);
    return ResourcesettingsProjectsSettingsGetRequest;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsGetRequest };
var ResourcesettingsProjectsSettingsGetResponse = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsGetResponse, _super);
    function ResourcesettingsProjectsSettingsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudResourcesettingsV1Setting)
    ], ResourcesettingsProjectsSettingsGetResponse.prototype, "googleCloudResourcesettingsV1Setting", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResourcesettingsProjectsSettingsGetResponse.prototype, "statusCode", void 0);
    return ResourcesettingsProjectsSettingsGetResponse;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsGetResponse };
