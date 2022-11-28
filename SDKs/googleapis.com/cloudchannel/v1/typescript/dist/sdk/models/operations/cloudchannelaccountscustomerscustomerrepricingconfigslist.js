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
var CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams.prototype, "parent", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams };
var CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams };
var CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity };
var CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest.prototype, "security", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest };
var CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListCustomerRepricingConfigsResponse)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse.prototype, "googleCloudChannelV1ListCustomerRepricingConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse };
