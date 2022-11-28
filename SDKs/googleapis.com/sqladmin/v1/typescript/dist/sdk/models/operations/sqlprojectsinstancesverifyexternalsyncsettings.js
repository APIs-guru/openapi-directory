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
var SqlProjectsInstancesVerifyExternalSyncSettingsPathParams = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesVerifyExternalSyncSettingsPathParams, _super);
    function SqlProjectsInstancesVerifyExternalSyncSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsPathParams.prototype, "project", void 0);
    return SqlProjectsInstancesVerifyExternalSyncSettingsPathParams;
}(SpeakeasyBase));
export { SqlProjectsInstancesVerifyExternalSyncSettingsPathParams };
var SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams, _super);
    function SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams;
}(SpeakeasyBase));
export { SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams };
var SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1, _super);
    function SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1.prototype, "oauth2c", void 0);
    return SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1;
}(SpeakeasyBase));
export { SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1 };
var SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2, _super);
    function SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2.prototype, "oauth2c", void 0);
    return SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2;
}(SpeakeasyBase));
export { SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2 };
var SqlProjectsInstancesVerifyExternalSyncSettingsSecurity = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesVerifyExternalSyncSettingsSecurity, _super);
    function SqlProjectsInstancesVerifyExternalSyncSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsSecurity.prototype, "option2", void 0);
    return SqlProjectsInstancesVerifyExternalSyncSettingsSecurity;
}(SpeakeasyBase));
export { SqlProjectsInstancesVerifyExternalSyncSettingsSecurity };
var SqlProjectsInstancesVerifyExternalSyncSettingsRequest = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesVerifyExternalSyncSettingsRequest, _super);
    function SqlProjectsInstancesVerifyExternalSyncSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlProjectsInstancesVerifyExternalSyncSettingsPathParams)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SqlInstancesVerifyExternalSyncSettingsRequest)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlProjectsInstancesVerifyExternalSyncSettingsSecurity)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsRequest.prototype, "security", void 0);
    return SqlProjectsInstancesVerifyExternalSyncSettingsRequest;
}(SpeakeasyBase));
export { SqlProjectsInstancesVerifyExternalSyncSettingsRequest };
var SqlProjectsInstancesVerifyExternalSyncSettingsResponse = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesVerifyExternalSyncSettingsResponse, _super);
    function SqlProjectsInstancesVerifyExternalSyncSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SqlInstancesVerifyExternalSyncSettingsResponse)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsResponse.prototype, "sqlInstancesVerifyExternalSyncSettingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlProjectsInstancesVerifyExternalSyncSettingsResponse.prototype, "statusCode", void 0);
    return SqlProjectsInstancesVerifyExternalSyncSettingsResponse;
}(SpeakeasyBase));
export { SqlProjectsInstancesVerifyExternalSyncSettingsResponse };
