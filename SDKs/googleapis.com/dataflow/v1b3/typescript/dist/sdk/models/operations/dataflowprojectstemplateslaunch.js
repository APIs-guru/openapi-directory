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
var DataflowProjectsTemplatesLaunchPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesLaunchPathParams, _super);
    function DataflowProjectsTemplatesLaunchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchPathParams.prototype, "projectId", void 0);
    return DataflowProjectsTemplatesLaunchPathParams;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesLaunchPathParams };
var DataflowProjectsTemplatesLaunchQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesLaunchQueryParams, _super);
    function DataflowProjectsTemplatesLaunchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dynamicTemplate.gcsPath" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "dynamicTemplateGcsPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dynamicTemplate.stagingLocation" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "dynamicTemplateStagingLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gcsPath" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "gcsPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsTemplatesLaunchQueryParams.prototype, "validateOnly", void 0);
    return DataflowProjectsTemplatesLaunchQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesLaunchQueryParams };
var DataflowProjectsTemplatesLaunchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesLaunchSecurityOption1, _super);
    function DataflowProjectsTemplatesLaunchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesLaunchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesLaunchSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesLaunchSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesLaunchSecurityOption1 };
var DataflowProjectsTemplatesLaunchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesLaunchSecurityOption2, _super);
    function DataflowProjectsTemplatesLaunchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesLaunchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesLaunchSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesLaunchSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesLaunchSecurityOption2 };
var DataflowProjectsTemplatesLaunchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesLaunchSecurityOption3, _super);
    function DataflowProjectsTemplatesLaunchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesLaunchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesLaunchSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesLaunchSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesLaunchSecurityOption3 };
var DataflowProjectsTemplatesLaunchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesLaunchSecurityOption4, _super);
    function DataflowProjectsTemplatesLaunchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesLaunchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesLaunchSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesLaunchSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesLaunchSecurityOption4 };
var DataflowProjectsTemplatesLaunchSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesLaunchSecurity, _super);
    function DataflowProjectsTemplatesLaunchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesLaunchSecurityOption1)
    ], DataflowProjectsTemplatesLaunchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesLaunchSecurityOption2)
    ], DataflowProjectsTemplatesLaunchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesLaunchSecurityOption3)
    ], DataflowProjectsTemplatesLaunchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesLaunchSecurityOption4)
    ], DataflowProjectsTemplatesLaunchSecurity.prototype, "option4", void 0);
    return DataflowProjectsTemplatesLaunchSecurity;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesLaunchSecurity };
var DataflowProjectsTemplatesLaunchRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesLaunchRequest, _super);
    function DataflowProjectsTemplatesLaunchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsTemplatesLaunchPathParams)
    ], DataflowProjectsTemplatesLaunchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsTemplatesLaunchQueryParams)
    ], DataflowProjectsTemplatesLaunchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LaunchTemplateParameters)
    ], DataflowProjectsTemplatesLaunchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsTemplatesLaunchSecurity)
    ], DataflowProjectsTemplatesLaunchRequest.prototype, "security", void 0);
    return DataflowProjectsTemplatesLaunchRequest;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesLaunchRequest };
var DataflowProjectsTemplatesLaunchResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesLaunchResponse, _super);
    function DataflowProjectsTemplatesLaunchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesLaunchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LaunchTemplateResponse)
    ], DataflowProjectsTemplatesLaunchResponse.prototype, "launchTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsTemplatesLaunchResponse.prototype, "statusCode", void 0);
    return DataflowProjectsTemplatesLaunchResponse;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesLaunchResponse };
