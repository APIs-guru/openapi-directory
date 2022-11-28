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
var CloudchannelAccountsListSubscribersPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListSubscribersPathParams, _super);
    function CloudchannelAccountsListSubscribersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersPathParams.prototype, "account", void 0);
    return CloudchannelAccountsListSubscribersPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsListSubscribersPathParams };
var CloudchannelAccountsListSubscribersQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListSubscribersQueryParams, _super);
    function CloudchannelAccountsListSubscribersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsListSubscribersQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsListSubscribersQueryParams };
var CloudchannelAccountsListSubscribersSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListSubscribersSecurity, _super);
    function CloudchannelAccountsListSubscribersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsListSubscribersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsListSubscribersSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsListSubscribersSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsListSubscribersSecurity };
var CloudchannelAccountsListSubscribersRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListSubscribersRequest, _super);
    function CloudchannelAccountsListSubscribersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsListSubscribersPathParams)
    ], CloudchannelAccountsListSubscribersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsListSubscribersQueryParams)
    ], CloudchannelAccountsListSubscribersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsListSubscribersSecurity)
    ], CloudchannelAccountsListSubscribersRequest.prototype, "security", void 0);
    return CloudchannelAccountsListSubscribersRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsListSubscribersRequest };
var CloudchannelAccountsListSubscribersResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListSubscribersResponse, _super);
    function CloudchannelAccountsListSubscribersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsListSubscribersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListSubscribersResponse)
    ], CloudchannelAccountsListSubscribersResponse.prototype, "googleCloudChannelV1ListSubscribersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsListSubscribersResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsListSubscribersResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsListSubscribersResponse };
