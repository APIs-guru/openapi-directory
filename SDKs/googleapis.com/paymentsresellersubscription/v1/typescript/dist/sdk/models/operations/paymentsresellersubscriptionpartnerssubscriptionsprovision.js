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
var PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams.prototype, "parent", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams };
var PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=subscriptionId" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "subscriptionId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams.prototype, "uploadProtocol", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams };
var PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest.prototype, "request", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest };
var PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse.prototype, "googleCloudPaymentsResellerSubscriptionV1Subscription", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse.prototype, "statusCode", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse };
