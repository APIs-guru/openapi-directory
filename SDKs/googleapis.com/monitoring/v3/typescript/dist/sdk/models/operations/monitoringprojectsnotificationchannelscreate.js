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
var MonitoringProjectsNotificationChannelsCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsCreatePathParams, _super);
    function MonitoringProjectsNotificationChannelsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreatePathParams.prototype, "name", void 0);
    return MonitoringProjectsNotificationChannelsCreatePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsCreatePathParams };
var MonitoringProjectsNotificationChannelsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsCreateQueryParams, _super);
    function MonitoringProjectsNotificationChannelsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsNotificationChannelsCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsCreateQueryParams };
var MonitoringProjectsNotificationChannelsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsCreateSecurityOption1, _super);
    function MonitoringProjectsNotificationChannelsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelsCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsCreateSecurityOption1 };
var MonitoringProjectsNotificationChannelsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsCreateSecurityOption2, _super);
    function MonitoringProjectsNotificationChannelsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelsCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsCreateSecurityOption2 };
var MonitoringProjectsNotificationChannelsCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsCreateSecurity, _super);
    function MonitoringProjectsNotificationChannelsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelsCreateSecurityOption1)
    ], MonitoringProjectsNotificationChannelsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelsCreateSecurityOption2)
    ], MonitoringProjectsNotificationChannelsCreateSecurity.prototype, "option2", void 0);
    return MonitoringProjectsNotificationChannelsCreateSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsCreateSecurity };
var MonitoringProjectsNotificationChannelsCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsCreateRequest, _super);
    function MonitoringProjectsNotificationChannelsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsCreatePathParams)
    ], MonitoringProjectsNotificationChannelsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsCreateQueryParams)
    ], MonitoringProjectsNotificationChannelsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NotificationChannel)
    ], MonitoringProjectsNotificationChannelsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsCreateSecurity)
    ], MonitoringProjectsNotificationChannelsCreateRequest.prototype, "security", void 0);
    return MonitoringProjectsNotificationChannelsCreateRequest;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsCreateRequest };
var MonitoringProjectsNotificationChannelsCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsCreateResponse, _super);
    function MonitoringProjectsNotificationChannelsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotificationChannel)
    ], MonitoringProjectsNotificationChannelsCreateResponse.prototype, "notificationChannel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsNotificationChannelsCreateResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsNotificationChannelsCreateResponse;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsCreateResponse };
