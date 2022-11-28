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
var CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams.prototype, "parent", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams };
var CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams };
var CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity };
var CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1CustomerRepricingConfigInput)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest.prototype, "security", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest };
var CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse, _super);
    function CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1CustomerRepricingConfig)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse.prototype, "googleCloudChannelV1CustomerRepricingConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse };
