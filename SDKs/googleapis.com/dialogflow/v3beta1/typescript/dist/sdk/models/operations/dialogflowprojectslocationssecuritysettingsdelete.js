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
var DialogflowProjectsLocationsSecuritySettingsDeletePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsDeletePathParams, _super);
    function DialogflowProjectsLocationsSecuritySettingsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeletePathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsSecuritySettingsDeletePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsDeletePathParams };
var DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams, _super);
    function DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams };
var DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1, _super);
    function DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1 };
var DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2, _super);
    function DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2 };
var DialogflowProjectsLocationsSecuritySettingsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsDeleteSecurity, _super);
    function DialogflowProjectsLocationsSecuritySettingsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsSecuritySettingsDeleteSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsDeleteSecurity };
var DialogflowProjectsLocationsSecuritySettingsDeleteRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsDeleteRequest, _super);
    function DialogflowProjectsLocationsSecuritySettingsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsDeletePathParams)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsDeleteSecurity)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsSecuritySettingsDeleteRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsDeleteRequest };
var DialogflowProjectsLocationsSecuritySettingsDeleteResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsDeleteResponse, _super);
    function DialogflowProjectsLocationsSecuritySettingsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsSecuritySettingsDeleteResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsSecuritySettingsDeleteResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsDeleteResponse };
