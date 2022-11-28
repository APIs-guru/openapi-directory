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
var DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams, _super);
    function DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registration" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams.prototype, "registration", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams };
var DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams, _super);
    function DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams };
var DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity, _super);
    function DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity.prototype, "oauth2c", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity };
var DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest, _super);
    function DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConfigureContactSettingsRequest)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest.prototype, "security", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest };
var DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse, _super);
    function DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse.prototype, "statusCode", void 0);
    return DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse };
