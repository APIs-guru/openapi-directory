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
var ResellerSubscriptionsChangeRenewalSettingsPathParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangeRenewalSettingsPathParams, _super);
    function ResellerSubscriptionsChangeRenewalSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsPathParams.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsPathParams.prototype, "subscriptionId", void 0);
    return ResellerSubscriptionsChangeRenewalSettingsPathParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangeRenewalSettingsPathParams };
var ResellerSubscriptionsChangeRenewalSettingsQueryParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangeRenewalSettingsQueryParams, _super);
    function ResellerSubscriptionsChangeRenewalSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerSubscriptionsChangeRenewalSettingsQueryParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangeRenewalSettingsQueryParams };
var ResellerSubscriptionsChangeRenewalSettingsSecurity = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangeRenewalSettingsSecurity, _super);
    function ResellerSubscriptionsChangeRenewalSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerSubscriptionsChangeRenewalSettingsSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerSubscriptionsChangeRenewalSettingsSecurity.prototype, "oauth2c", void 0);
    return ResellerSubscriptionsChangeRenewalSettingsSecurity;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangeRenewalSettingsSecurity };
var ResellerSubscriptionsChangeRenewalSettingsRequest = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangeRenewalSettingsRequest, _super);
    function ResellerSubscriptionsChangeRenewalSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsChangeRenewalSettingsPathParams)
    ], ResellerSubscriptionsChangeRenewalSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsChangeRenewalSettingsQueryParams)
    ], ResellerSubscriptionsChangeRenewalSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RenewalSettings)
    ], ResellerSubscriptionsChangeRenewalSettingsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsChangeRenewalSettingsSecurity)
    ], ResellerSubscriptionsChangeRenewalSettingsRequest.prototype, "security", void 0);
    return ResellerSubscriptionsChangeRenewalSettingsRequest;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangeRenewalSettingsRequest };
var ResellerSubscriptionsChangeRenewalSettingsResponse = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangeRenewalSettingsResponse, _super);
    function ResellerSubscriptionsChangeRenewalSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangeRenewalSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ResellerSubscriptionsChangeRenewalSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Subscription)
    ], ResellerSubscriptionsChangeRenewalSettingsResponse.prototype, "subscription", void 0);
    return ResellerSubscriptionsChangeRenewalSettingsResponse;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangeRenewalSettingsResponse };
