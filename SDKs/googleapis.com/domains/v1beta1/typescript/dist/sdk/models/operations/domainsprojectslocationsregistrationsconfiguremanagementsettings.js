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
var DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams, _super);
    function DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registration" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams.prototype, "registration", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams };
var DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams, _super);
    function DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams };
var DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity, _super);
    function DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity.prototype, "oauth2c", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity };
var DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest, _super);
    function DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConfigureManagementSettingsRequestInput)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest.prototype, "security", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest };
var DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse, _super);
    function DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse.prototype, "statusCode", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse };
