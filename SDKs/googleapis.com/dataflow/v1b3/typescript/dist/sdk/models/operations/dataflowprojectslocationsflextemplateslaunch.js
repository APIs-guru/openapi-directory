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
var DataflowProjectsLocationsFlexTemplatesLaunchPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsFlexTemplatesLaunchPathParams, _super);
    function DataflowProjectsLocationsFlexTemplatesLaunchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsFlexTemplatesLaunchPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsFlexTemplatesLaunchPathParams };
var DataflowProjectsLocationsFlexTemplatesLaunchQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsFlexTemplatesLaunchQueryParams, _super);
    function DataflowProjectsLocationsFlexTemplatesLaunchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsFlexTemplatesLaunchQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsFlexTemplatesLaunchQueryParams };
var DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1, _super);
    function DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1 };
var DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2, _super);
    function DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2 };
var DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3, _super);
    function DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3 };
var DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4, _super);
    function DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4 };
var DataflowProjectsLocationsFlexTemplatesLaunchSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsFlexTemplatesLaunchSecurity, _super);
    function DataflowProjectsLocationsFlexTemplatesLaunchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4)
    ], DataflowProjectsLocationsFlexTemplatesLaunchSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsFlexTemplatesLaunchSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsFlexTemplatesLaunchSecurity };
var DataflowProjectsLocationsFlexTemplatesLaunchRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsFlexTemplatesLaunchRequest, _super);
    function DataflowProjectsLocationsFlexTemplatesLaunchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsFlexTemplatesLaunchPathParams)
    ], DataflowProjectsLocationsFlexTemplatesLaunchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsFlexTemplatesLaunchQueryParams)
    ], DataflowProjectsLocationsFlexTemplatesLaunchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LaunchFlexTemplateRequest)
    ], DataflowProjectsLocationsFlexTemplatesLaunchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsFlexTemplatesLaunchSecurity)
    ], DataflowProjectsLocationsFlexTemplatesLaunchRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsFlexTemplatesLaunchRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsFlexTemplatesLaunchRequest };
var DataflowProjectsLocationsFlexTemplatesLaunchResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsFlexTemplatesLaunchResponse, _super);
    function DataflowProjectsLocationsFlexTemplatesLaunchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsFlexTemplatesLaunchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LaunchFlexTemplateResponse)
    ], DataflowProjectsLocationsFlexTemplatesLaunchResponse.prototype, "launchFlexTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsFlexTemplatesLaunchResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsFlexTemplatesLaunchResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsFlexTemplatesLaunchResponse };
