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
var CloudchannelAccountsCustomersListPurchasableSkusPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersListPurchasableSkusPathParams, _super);
    function CloudchannelAccountsCustomersListPurchasableSkusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusPathParams.prototype, "customer", void 0);
    return CloudchannelAccountsCustomersListPurchasableSkusPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersListPurchasableSkusPathParams };
export var CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum;
(function (CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum) {
    CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum["ChangeTypeUnspecified"] = "CHANGE_TYPE_UNSPECIFIED";
    CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum["Upgrade"] = "UPGRADE";
    CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum["Downgrade"] = "DOWNGRADE";
})(CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum || (CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum = {}));
var CloudchannelAccountsCustomersListPurchasableSkusQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersListPurchasableSkusQueryParams, _super);
    function CloudchannelAccountsCustomersListPurchasableSkusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changeOfferPurchase.changeType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "changeOfferPurchaseChangeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changeOfferPurchase.entitlement" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "changeOfferPurchaseEntitlement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createEntitlementPurchase.product" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "createEntitlementPurchaseProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsCustomersListPurchasableSkusQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersListPurchasableSkusQueryParams };
var CloudchannelAccountsCustomersListPurchasableSkusSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersListPurchasableSkusSecurity, _super);
    function CloudchannelAccountsCustomersListPurchasableSkusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsCustomersListPurchasableSkusSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsCustomersListPurchasableSkusSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsCustomersListPurchasableSkusSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersListPurchasableSkusSecurity };
var CloudchannelAccountsCustomersListPurchasableSkusRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersListPurchasableSkusRequest, _super);
    function CloudchannelAccountsCustomersListPurchasableSkusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersListPurchasableSkusPathParams)
    ], CloudchannelAccountsCustomersListPurchasableSkusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersListPurchasableSkusQueryParams)
    ], CloudchannelAccountsCustomersListPurchasableSkusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersListPurchasableSkusSecurity)
    ], CloudchannelAccountsCustomersListPurchasableSkusRequest.prototype, "security", void 0);
    return CloudchannelAccountsCustomersListPurchasableSkusRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersListPurchasableSkusRequest };
var CloudchannelAccountsCustomersListPurchasableSkusResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersListPurchasableSkusResponse, _super);
    function CloudchannelAccountsCustomersListPurchasableSkusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersListPurchasableSkusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListPurchasableSkusResponse)
    ], CloudchannelAccountsCustomersListPurchasableSkusResponse.prototype, "googleCloudChannelV1ListPurchasableSkusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersListPurchasableSkusResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsCustomersListPurchasableSkusResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersListPurchasableSkusResponse };
