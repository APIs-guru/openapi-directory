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
var PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams.prototype, "parent", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams };
var PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=subscriptionId" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "subscriptionId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams };
var PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest.prototype, "request", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest };
var PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse.prototype, "googleCloudPaymentsResellerSubscriptionV1Subscription", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse.prototype, "statusCode", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse };
