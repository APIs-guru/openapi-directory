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
var ResourcesettingsProjectsSettingsListPathParams = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsListPathParams, _super);
    function ResourcesettingsProjectsSettingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListPathParams.prototype, "parent", void 0);
    return ResourcesettingsProjectsSettingsListPathParams;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsListPathParams };
export var ResourcesettingsProjectsSettingsListViewEnum;
(function (ResourcesettingsProjectsSettingsListViewEnum) {
    ResourcesettingsProjectsSettingsListViewEnum["SettingViewUnspecified"] = "SETTING_VIEW_UNSPECIFIED";
    ResourcesettingsProjectsSettingsListViewEnum["SettingViewBasic"] = "SETTING_VIEW_BASIC";
    ResourcesettingsProjectsSettingsListViewEnum["SettingViewEffectiveValue"] = "SETTING_VIEW_EFFECTIVE_VALUE";
    ResourcesettingsProjectsSettingsListViewEnum["SettingViewLocalValue"] = "SETTING_VIEW_LOCAL_VALUE";
})(ResourcesettingsProjectsSettingsListViewEnum || (ResourcesettingsProjectsSettingsListViewEnum = {}));
var ResourcesettingsProjectsSettingsListQueryParams = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsListQueryParams, _super);
    function ResourcesettingsProjectsSettingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListQueryParams.prototype, "view", void 0);
    return ResourcesettingsProjectsSettingsListQueryParams;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsListQueryParams };
var ResourcesettingsProjectsSettingsListSecurity = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsListSecurity, _super);
    function ResourcesettingsProjectsSettingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResourcesettingsProjectsSettingsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResourcesettingsProjectsSettingsListSecurity.prototype, "oauth2c", void 0);
    return ResourcesettingsProjectsSettingsListSecurity;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsListSecurity };
var ResourcesettingsProjectsSettingsListRequest = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsListRequest, _super);
    function ResourcesettingsProjectsSettingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResourcesettingsProjectsSettingsListPathParams)
    ], ResourcesettingsProjectsSettingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResourcesettingsProjectsSettingsListQueryParams)
    ], ResourcesettingsProjectsSettingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResourcesettingsProjectsSettingsListSecurity)
    ], ResourcesettingsProjectsSettingsListRequest.prototype, "security", void 0);
    return ResourcesettingsProjectsSettingsListRequest;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsListRequest };
var ResourcesettingsProjectsSettingsListResponse = /** @class */ (function (_super) {
    __extends(ResourcesettingsProjectsSettingsListResponse, _super);
    function ResourcesettingsProjectsSettingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResourcesettingsProjectsSettingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudResourcesettingsV1ListSettingsResponse)
    ], ResourcesettingsProjectsSettingsListResponse.prototype, "googleCloudResourcesettingsV1ListSettingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResourcesettingsProjectsSettingsListResponse.prototype, "statusCode", void 0);
    return ResourcesettingsProjectsSettingsListResponse;
}(SpeakeasyBase));
export { ResourcesettingsProjectsSettingsListResponse };
