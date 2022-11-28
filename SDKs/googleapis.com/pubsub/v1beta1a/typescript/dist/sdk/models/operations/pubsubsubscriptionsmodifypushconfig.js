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
var PubsubSubscriptionsModifyPushConfigQueryParams = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsModifyPushConfigQueryParams, _super);
    function PubsubSubscriptionsModifyPushConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubSubscriptionsModifyPushConfigQueryParams;
}(SpeakeasyBase));
export { PubsubSubscriptionsModifyPushConfigQueryParams };
var PubsubSubscriptionsModifyPushConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsModifyPushConfigSecurityOption1, _super);
    function PubsubSubscriptionsModifyPushConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsModifyPushConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsModifyPushConfigSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsModifyPushConfigSecurityOption1;
}(SpeakeasyBase));
export { PubsubSubscriptionsModifyPushConfigSecurityOption1 };
var PubsubSubscriptionsModifyPushConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsModifyPushConfigSecurityOption2, _super);
    function PubsubSubscriptionsModifyPushConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsModifyPushConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsModifyPushConfigSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsModifyPushConfigSecurityOption2;
}(SpeakeasyBase));
export { PubsubSubscriptionsModifyPushConfigSecurityOption2 };
var PubsubSubscriptionsModifyPushConfigSecurity = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsModifyPushConfigSecurity, _super);
    function PubsubSubscriptionsModifyPushConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsModifyPushConfigSecurityOption1)
    ], PubsubSubscriptionsModifyPushConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsModifyPushConfigSecurityOption2)
    ], PubsubSubscriptionsModifyPushConfigSecurity.prototype, "option2", void 0);
    return PubsubSubscriptionsModifyPushConfigSecurity;
}(SpeakeasyBase));
export { PubsubSubscriptionsModifyPushConfigSecurity };
var PubsubSubscriptionsModifyPushConfigRequest = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsModifyPushConfigRequest, _super);
    function PubsubSubscriptionsModifyPushConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsModifyPushConfigQueryParams)
    ], PubsubSubscriptionsModifyPushConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyPushConfigRequest)
    ], PubsubSubscriptionsModifyPushConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsModifyPushConfigSecurity)
    ], PubsubSubscriptionsModifyPushConfigRequest.prototype, "security", void 0);
    return PubsubSubscriptionsModifyPushConfigRequest;
}(SpeakeasyBase));
export { PubsubSubscriptionsModifyPushConfigRequest };
var PubsubSubscriptionsModifyPushConfigResponse = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsModifyPushConfigResponse, _super);
    function PubsubSubscriptionsModifyPushConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubSubscriptionsModifyPushConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubSubscriptionsModifyPushConfigResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubSubscriptionsModifyPushConfigResponse.prototype, "statusCode", void 0);
    return PubsubSubscriptionsModifyPushConfigResponse;
}(SpeakeasyBase));
export { PubsubSubscriptionsModifyPushConfigResponse };
