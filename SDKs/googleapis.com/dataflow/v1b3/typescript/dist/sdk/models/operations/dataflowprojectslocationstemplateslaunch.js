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
var DataflowProjectsLocationsTemplatesLaunchPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesLaunchPathParams, _super);
    function DataflowProjectsLocationsTemplatesLaunchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsTemplatesLaunchPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesLaunchPathParams };
var DataflowProjectsLocationsTemplatesLaunchQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesLaunchQueryParams, _super);
    function DataflowProjectsLocationsTemplatesLaunchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dynamicTemplate.gcsPath" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "dynamicTemplateGcsPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dynamicTemplate.stagingLocation" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "dynamicTemplateStagingLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gcsPath" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "gcsPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsTemplatesLaunchQueryParams.prototype, "validateOnly", void 0);
    return DataflowProjectsLocationsTemplatesLaunchQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesLaunchQueryParams };
var DataflowProjectsLocationsTemplatesLaunchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesLaunchSecurityOption1, _super);
    function DataflowProjectsLocationsTemplatesLaunchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesLaunchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesLaunchSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesLaunchSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesLaunchSecurityOption1 };
var DataflowProjectsLocationsTemplatesLaunchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesLaunchSecurityOption2, _super);
    function DataflowProjectsLocationsTemplatesLaunchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesLaunchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesLaunchSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesLaunchSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesLaunchSecurityOption2 };
var DataflowProjectsLocationsTemplatesLaunchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesLaunchSecurityOption3, _super);
    function DataflowProjectsLocationsTemplatesLaunchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesLaunchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesLaunchSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesLaunchSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesLaunchSecurityOption3 };
var DataflowProjectsLocationsTemplatesLaunchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesLaunchSecurityOption4, _super);
    function DataflowProjectsLocationsTemplatesLaunchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesLaunchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesLaunchSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesLaunchSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesLaunchSecurityOption4 };
var DataflowProjectsLocationsTemplatesLaunchSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesLaunchSecurity, _super);
    function DataflowProjectsLocationsTemplatesLaunchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesLaunchSecurityOption1)
    ], DataflowProjectsLocationsTemplatesLaunchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesLaunchSecurityOption2)
    ], DataflowProjectsLocationsTemplatesLaunchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesLaunchSecurityOption3)
    ], DataflowProjectsLocationsTemplatesLaunchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesLaunchSecurityOption4)
    ], DataflowProjectsLocationsTemplatesLaunchSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsTemplatesLaunchSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesLaunchSecurity };
var DataflowProjectsLocationsTemplatesLaunchRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesLaunchRequest, _super);
    function DataflowProjectsLocationsTemplatesLaunchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsTemplatesLaunchPathParams)
    ], DataflowProjectsLocationsTemplatesLaunchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsTemplatesLaunchQueryParams)
    ], DataflowProjectsLocationsTemplatesLaunchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LaunchTemplateParameters)
    ], DataflowProjectsLocationsTemplatesLaunchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsTemplatesLaunchSecurity)
    ], DataflowProjectsLocationsTemplatesLaunchRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsTemplatesLaunchRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesLaunchRequest };
var DataflowProjectsLocationsTemplatesLaunchResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesLaunchResponse, _super);
    function DataflowProjectsLocationsTemplatesLaunchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesLaunchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LaunchTemplateResponse)
    ], DataflowProjectsLocationsTemplatesLaunchResponse.prototype, "launchTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsTemplatesLaunchResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsTemplatesLaunchResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesLaunchResponse };
