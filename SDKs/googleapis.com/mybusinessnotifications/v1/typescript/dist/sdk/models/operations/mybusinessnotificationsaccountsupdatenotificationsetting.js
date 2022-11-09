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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var MybusinessnotificationsAccountsUpdateNotificationSettingPathParams = /** @class */ (function (_super) {
    __extends(MybusinessnotificationsAccountsUpdateNotificationSettingPathParams, _super);
    function MybusinessnotificationsAccountsUpdateNotificationSettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingPathParams.prototype, "name", void 0);
    return MybusinessnotificationsAccountsUpdateNotificationSettingPathParams;
}(SpeakeasyBase));
export { MybusinessnotificationsAccountsUpdateNotificationSettingPathParams };
var MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams, _super);
    function MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams;
}(SpeakeasyBase));
export { MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams };
var MybusinessnotificationsAccountsUpdateNotificationSettingRequest = /** @class */ (function (_super) {
    __extends(MybusinessnotificationsAccountsUpdateNotificationSettingRequest, _super);
    function MybusinessnotificationsAccountsUpdateNotificationSettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessnotificationsAccountsUpdateNotificationSettingPathParams)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NotificationSetting)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingRequest.prototype, "request", void 0);
    return MybusinessnotificationsAccountsUpdateNotificationSettingRequest;
}(SpeakeasyBase));
export { MybusinessnotificationsAccountsUpdateNotificationSettingRequest };
var MybusinessnotificationsAccountsUpdateNotificationSettingResponse = /** @class */ (function (_super) {
    __extends(MybusinessnotificationsAccountsUpdateNotificationSettingResponse, _super);
    function MybusinessnotificationsAccountsUpdateNotificationSettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotificationSetting)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingResponse.prototype, "notificationSetting", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MybusinessnotificationsAccountsUpdateNotificationSettingResponse.prototype, "statusCode", void 0);
    return MybusinessnotificationsAccountsUpdateNotificationSettingResponse;
}(SpeakeasyBase));
export { MybusinessnotificationsAccountsUpdateNotificationSettingResponse };
