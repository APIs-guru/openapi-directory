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
var MonitoringProjectsNotificationChannelsGetVerificationCodePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsGetVerificationCodePathParams, _super);
    function MonitoringProjectsNotificationChannelsGetVerificationCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodePathParams.prototype, "name", void 0);
    return MonitoringProjectsNotificationChannelsGetVerificationCodePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsGetVerificationCodePathParams };
var MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams, _super);
    function MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams };
var MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1, _super);
    function MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1 };
var MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2, _super);
    function MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2 };
var MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity, _super);
    function MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity.prototype, "option2", void 0);
    return MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity };
var MonitoringProjectsNotificationChannelsGetVerificationCodeRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsGetVerificationCodeRequest, _super);
    function MonitoringProjectsNotificationChannelsGetVerificationCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsGetVerificationCodePathParams)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetNotificationChannelVerificationCodeRequest)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeRequest.prototype, "security", void 0);
    return MonitoringProjectsNotificationChannelsGetVerificationCodeRequest;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsGetVerificationCodeRequest };
var MonitoringProjectsNotificationChannelsGetVerificationCodeResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsGetVerificationCodeResponse, _super);
    function MonitoringProjectsNotificationChannelsGetVerificationCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetNotificationChannelVerificationCodeResponse)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeResponse.prototype, "getNotificationChannelVerificationCodeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsNotificationChannelsGetVerificationCodeResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsNotificationChannelsGetVerificationCodeResponse;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsGetVerificationCodeResponse };
