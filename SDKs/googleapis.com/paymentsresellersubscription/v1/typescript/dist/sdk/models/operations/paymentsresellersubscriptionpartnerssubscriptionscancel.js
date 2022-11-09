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
var PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams.prototype, "name", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams };
var PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams };
var PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest.prototype, "request", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest };
var PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse, _super);
    function PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse.prototype, "googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse.prototype, "statusCode", void 0);
    return PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse };
