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
var CloudchannelAccountsUnregisterPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsUnregisterPathParams, _super);
    function CloudchannelAccountsUnregisterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterPathParams.prototype, "account", void 0);
    return CloudchannelAccountsUnregisterPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsUnregisterPathParams };
var CloudchannelAccountsUnregisterQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsUnregisterQueryParams, _super);
    function CloudchannelAccountsUnregisterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsUnregisterQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsUnregisterQueryParams };
var CloudchannelAccountsUnregisterSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsUnregisterSecurity, _super);
    function CloudchannelAccountsUnregisterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsUnregisterSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsUnregisterSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsUnregisterSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsUnregisterSecurity };
var CloudchannelAccountsUnregisterRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsUnregisterRequest, _super);
    function CloudchannelAccountsUnregisterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsUnregisterPathParams)
    ], CloudchannelAccountsUnregisterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsUnregisterQueryParams)
    ], CloudchannelAccountsUnregisterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1UnregisterSubscriberRequest)
    ], CloudchannelAccountsUnregisterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsUnregisterSecurity)
    ], CloudchannelAccountsUnregisterRequest.prototype, "security", void 0);
    return CloudchannelAccountsUnregisterRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsUnregisterRequest };
var CloudchannelAccountsUnregisterResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsUnregisterResponse, _super);
    function CloudchannelAccountsUnregisterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsUnregisterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1UnregisterSubscriberResponse)
    ], CloudchannelAccountsUnregisterResponse.prototype, "googleCloudChannelV1UnregisterSubscriberResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsUnregisterResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsUnregisterResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsUnregisterResponse };
