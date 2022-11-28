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
var CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListPathParams, _super);
    function CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListPathParams.prototype, "parent", void 0);
    return CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListPathParams };
var CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams, _super);
    function CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams };
var CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity, _super);
    function CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity };
var CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest, _super);
    function CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListPathParams)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest.prototype, "security", void 0);
    return CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest };
var CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse, _super);
    function CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse.prototype, "googleCloudChannelV1ListChannelPartnerRepricingConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse };
