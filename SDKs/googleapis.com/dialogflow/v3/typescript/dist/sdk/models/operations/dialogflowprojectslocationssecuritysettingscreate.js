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
var DialogflowProjectsLocationsSecuritySettingsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsCreatePathParams, _super);
    function DialogflowProjectsLocationsSecuritySettingsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsSecuritySettingsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsCreatePathParams };
var DialogflowProjectsLocationsSecuritySettingsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsCreateQueryParams, _super);
    function DialogflowProjectsLocationsSecuritySettingsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsSecuritySettingsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsCreateQueryParams };
var DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1 };
var DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2 };
var DialogflowProjectsLocationsSecuritySettingsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsCreateSecurity, _super);
    function DialogflowProjectsLocationsSecuritySettingsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1)
    ], DialogflowProjectsLocationsSecuritySettingsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2)
    ], DialogflowProjectsLocationsSecuritySettingsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsSecuritySettingsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsCreateSecurity };
var DialogflowProjectsLocationsSecuritySettingsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsCreateRequest, _super);
    function DialogflowProjectsLocationsSecuritySettingsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsCreatePathParams)
    ], DialogflowProjectsLocationsSecuritySettingsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsCreateQueryParams)
    ], DialogflowProjectsLocationsSecuritySettingsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3SecuritySettings)
    ], DialogflowProjectsLocationsSecuritySettingsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsCreateSecurity)
    ], DialogflowProjectsLocationsSecuritySettingsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsSecuritySettingsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsCreateRequest };
var DialogflowProjectsLocationsSecuritySettingsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsCreateResponse, _super);
    function DialogflowProjectsLocationsSecuritySettingsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3SecuritySettings)
    ], DialogflowProjectsLocationsSecuritySettingsCreateResponse.prototype, "googleCloudDialogflowCxV3SecuritySettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsSecuritySettingsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsSecuritySettingsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsCreateResponse };
