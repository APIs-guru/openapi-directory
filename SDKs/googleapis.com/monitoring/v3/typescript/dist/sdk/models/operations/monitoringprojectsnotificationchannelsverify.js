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
var MonitoringProjectsNotificationChannelsVerifyPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsVerifyPathParams, _super);
    function MonitoringProjectsNotificationChannelsVerifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyPathParams.prototype, "name", void 0);
    return MonitoringProjectsNotificationChannelsVerifyPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsVerifyPathParams };
var MonitoringProjectsNotificationChannelsVerifyQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsVerifyQueryParams, _super);
    function MonitoringProjectsNotificationChannelsVerifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsNotificationChannelsVerifyQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsVerifyQueryParams };
var MonitoringProjectsNotificationChannelsVerifySecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsVerifySecurityOption1, _super);
    function MonitoringProjectsNotificationChannelsVerifySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelsVerifySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelsVerifySecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelsVerifySecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsVerifySecurityOption1 };
var MonitoringProjectsNotificationChannelsVerifySecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsVerifySecurityOption2, _super);
    function MonitoringProjectsNotificationChannelsVerifySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelsVerifySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelsVerifySecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelsVerifySecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsVerifySecurityOption2 };
var MonitoringProjectsNotificationChannelsVerifySecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsVerifySecurity, _super);
    function MonitoringProjectsNotificationChannelsVerifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelsVerifySecurityOption1)
    ], MonitoringProjectsNotificationChannelsVerifySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelsVerifySecurityOption2)
    ], MonitoringProjectsNotificationChannelsVerifySecurity.prototype, "option2", void 0);
    return MonitoringProjectsNotificationChannelsVerifySecurity;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsVerifySecurity };
var MonitoringProjectsNotificationChannelsVerifyRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsVerifyRequest, _super);
    function MonitoringProjectsNotificationChannelsVerifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsVerifyPathParams)
    ], MonitoringProjectsNotificationChannelsVerifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsVerifyQueryParams)
    ], MonitoringProjectsNotificationChannelsVerifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.VerifyNotificationChannelRequest)
    ], MonitoringProjectsNotificationChannelsVerifyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsVerifySecurity)
    ], MonitoringProjectsNotificationChannelsVerifyRequest.prototype, "security", void 0);
    return MonitoringProjectsNotificationChannelsVerifyRequest;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsVerifyRequest };
var MonitoringProjectsNotificationChannelsVerifyResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsVerifyResponse, _super);
    function MonitoringProjectsNotificationChannelsVerifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsVerifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotificationChannel)
    ], MonitoringProjectsNotificationChannelsVerifyResponse.prototype, "notificationChannel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsNotificationChannelsVerifyResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsNotificationChannelsVerifyResponse;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsVerifyResponse };
