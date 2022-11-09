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
var CloudidentityGroupsUpdateSecuritySettingsPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsUpdateSecuritySettingsPathParams, _super);
    function CloudidentityGroupsUpdateSecuritySettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsPathParams.prototype, "name", void 0);
    return CloudidentityGroupsUpdateSecuritySettingsPathParams;
}(SpeakeasyBase));
export { CloudidentityGroupsUpdateSecuritySettingsPathParams };
var CloudidentityGroupsUpdateSecuritySettingsQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsUpdateSecuritySettingsQueryParams, _super);
    function CloudidentityGroupsUpdateSecuritySettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsUpdateSecuritySettingsQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsUpdateSecuritySettingsQueryParams };
var CloudidentityGroupsUpdateSecuritySettingsSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsUpdateSecuritySettingsSecurityOption1, _super);
    function CloudidentityGroupsUpdateSecuritySettingsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsUpdateSecuritySettingsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsUpdateSecuritySettingsSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsUpdateSecuritySettingsSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsUpdateSecuritySettingsSecurityOption1 };
var CloudidentityGroupsUpdateSecuritySettingsSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsUpdateSecuritySettingsSecurityOption2, _super);
    function CloudidentityGroupsUpdateSecuritySettingsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsUpdateSecuritySettingsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsUpdateSecuritySettingsSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsUpdateSecuritySettingsSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsUpdateSecuritySettingsSecurityOption2 };
var CloudidentityGroupsUpdateSecuritySettingsSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsUpdateSecuritySettingsSecurity, _super);
    function CloudidentityGroupsUpdateSecuritySettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsUpdateSecuritySettingsSecurityOption1)
    ], CloudidentityGroupsUpdateSecuritySettingsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsUpdateSecuritySettingsSecurityOption2)
    ], CloudidentityGroupsUpdateSecuritySettingsSecurity.prototype, "option2", void 0);
    return CloudidentityGroupsUpdateSecuritySettingsSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsUpdateSecuritySettingsSecurity };
var CloudidentityGroupsUpdateSecuritySettingsRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsUpdateSecuritySettingsRequest, _super);
    function CloudidentityGroupsUpdateSecuritySettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsUpdateSecuritySettingsPathParams)
    ], CloudidentityGroupsUpdateSecuritySettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsUpdateSecuritySettingsQueryParams)
    ], CloudidentityGroupsUpdateSecuritySettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SecuritySettings)
    ], CloudidentityGroupsUpdateSecuritySettingsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsUpdateSecuritySettingsSecurity)
    ], CloudidentityGroupsUpdateSecuritySettingsRequest.prototype, "security", void 0);
    return CloudidentityGroupsUpdateSecuritySettingsRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsUpdateSecuritySettingsRequest };
var CloudidentityGroupsUpdateSecuritySettingsResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsUpdateSecuritySettingsResponse, _super);
    function CloudidentityGroupsUpdateSecuritySettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsUpdateSecuritySettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudidentityGroupsUpdateSecuritySettingsResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsUpdateSecuritySettingsResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsUpdateSecuritySettingsResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsUpdateSecuritySettingsResponse };
