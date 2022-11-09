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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams, _super);
    function SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams.prototype, "name", void 0);
    return SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams };
var SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams, _super);
    function SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams };
var SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity, _super);
    function SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity };
var SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest, _super);
    function SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest.prototype, "security", void 0);
    return SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest };
var SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse, _super);
    function SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ContainerThreatDetectionSettings)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse.prototype, "containerThreatDetectionSettings", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse };
