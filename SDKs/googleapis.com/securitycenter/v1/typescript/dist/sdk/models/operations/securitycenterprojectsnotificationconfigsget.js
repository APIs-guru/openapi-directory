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
var SecuritycenterProjectsNotificationConfigsGetPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsNotificationConfigsGetPathParams, _super);
    function SecuritycenterProjectsNotificationConfigsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetPathParams.prototype, "name", void 0);
    return SecuritycenterProjectsNotificationConfigsGetPathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsNotificationConfigsGetPathParams };
var SecuritycenterProjectsNotificationConfigsGetQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsNotificationConfigsGetQueryParams, _super);
    function SecuritycenterProjectsNotificationConfigsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsNotificationConfigsGetQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsNotificationConfigsGetQueryParams };
var SecuritycenterProjectsNotificationConfigsGetSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsNotificationConfigsGetSecurity, _super);
    function SecuritycenterProjectsNotificationConfigsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsNotificationConfigsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsNotificationConfigsGetSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsNotificationConfigsGetSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsNotificationConfigsGetSecurity };
var SecuritycenterProjectsNotificationConfigsGetRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsNotificationConfigsGetRequest, _super);
    function SecuritycenterProjectsNotificationConfigsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsNotificationConfigsGetPathParams)
    ], SecuritycenterProjectsNotificationConfigsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsNotificationConfigsGetQueryParams)
    ], SecuritycenterProjectsNotificationConfigsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsNotificationConfigsGetSecurity)
    ], SecuritycenterProjectsNotificationConfigsGetRequest.prototype, "security", void 0);
    return SecuritycenterProjectsNotificationConfigsGetRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsNotificationConfigsGetRequest };
var SecuritycenterProjectsNotificationConfigsGetResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsNotificationConfigsGetResponse, _super);
    function SecuritycenterProjectsNotificationConfigsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsNotificationConfigsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotificationConfig)
    ], SecuritycenterProjectsNotificationConfigsGetResponse.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsNotificationConfigsGetResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsNotificationConfigsGetResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsNotificationConfigsGetResponse };
