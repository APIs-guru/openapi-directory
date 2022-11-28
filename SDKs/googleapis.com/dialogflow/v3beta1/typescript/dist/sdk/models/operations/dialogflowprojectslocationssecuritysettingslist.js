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
var DialogflowProjectsLocationsSecuritySettingsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsListPathParams, _super);
    function DialogflowProjectsLocationsSecuritySettingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsSecuritySettingsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsListPathParams };
var DialogflowProjectsLocationsSecuritySettingsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsListQueryParams, _super);
    function DialogflowProjectsLocationsSecuritySettingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsSecuritySettingsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsListQueryParams };
var DialogflowProjectsLocationsSecuritySettingsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsListSecurityOption1, _super);
    function DialogflowProjectsLocationsSecuritySettingsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsSecuritySettingsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsSecuritySettingsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsSecuritySettingsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsListSecurityOption1 };
var DialogflowProjectsLocationsSecuritySettingsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsListSecurityOption2, _super);
    function DialogflowProjectsLocationsSecuritySettingsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsSecuritySettingsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsSecuritySettingsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsSecuritySettingsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsListSecurityOption2 };
var DialogflowProjectsLocationsSecuritySettingsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsListSecurity, _super);
    function DialogflowProjectsLocationsSecuritySettingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsListSecurityOption1)
    ], DialogflowProjectsLocationsSecuritySettingsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsListSecurityOption2)
    ], DialogflowProjectsLocationsSecuritySettingsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsSecuritySettingsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsListSecurity };
var DialogflowProjectsLocationsSecuritySettingsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsListRequest, _super);
    function DialogflowProjectsLocationsSecuritySettingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsListPathParams)
    ], DialogflowProjectsLocationsSecuritySettingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsListQueryParams)
    ], DialogflowProjectsLocationsSecuritySettingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsSecuritySettingsListSecurity)
    ], DialogflowProjectsLocationsSecuritySettingsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsSecuritySettingsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsListRequest };
var DialogflowProjectsLocationsSecuritySettingsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsSecuritySettingsListResponse, _super);
    function DialogflowProjectsLocationsSecuritySettingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsSecuritySettingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse)
    ], DialogflowProjectsLocationsSecuritySettingsListResponse.prototype, "googleCloudDialogflowCxV3beta1ListSecuritySettingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsSecuritySettingsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsSecuritySettingsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsSecuritySettingsListResponse };
