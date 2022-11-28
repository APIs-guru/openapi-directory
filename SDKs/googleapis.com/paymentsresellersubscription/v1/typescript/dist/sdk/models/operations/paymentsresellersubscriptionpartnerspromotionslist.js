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
var PaymentsresellersubscriptionPartnersPromotionsListPathParams = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersPromotionsListPathParams, _super);
    function PaymentsresellersubscriptionPartnersPromotionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListPathParams.prototype, "parent", void 0);
    return PaymentsresellersubscriptionPartnersPromotionsListPathParams;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersPromotionsListPathParams };
var PaymentsresellersubscriptionPartnersPromotionsListQueryParams = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersPromotionsListQueryParams, _super);
    function PaymentsresellersubscriptionPartnersPromotionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListQueryParams.prototype, "uploadProtocol", void 0);
    return PaymentsresellersubscriptionPartnersPromotionsListQueryParams;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersPromotionsListQueryParams };
var PaymentsresellersubscriptionPartnersPromotionsListRequest = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersPromotionsListRequest, _super);
    function PaymentsresellersubscriptionPartnersPromotionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PaymentsresellersubscriptionPartnersPromotionsListPathParams)
    ], PaymentsresellersubscriptionPartnersPromotionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PaymentsresellersubscriptionPartnersPromotionsListQueryParams)
    ], PaymentsresellersubscriptionPartnersPromotionsListRequest.prototype, "queryParams", void 0);
    return PaymentsresellersubscriptionPartnersPromotionsListRequest;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersPromotionsListRequest };
var PaymentsresellersubscriptionPartnersPromotionsListResponse = /** @class */ (function (_super) {
    __extends(PaymentsresellersubscriptionPartnersPromotionsListResponse, _super);
    function PaymentsresellersubscriptionPartnersPromotionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PaymentsresellersubscriptionPartnersPromotionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse)
    ], PaymentsresellersubscriptionPartnersPromotionsListResponse.prototype, "googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PaymentsresellersubscriptionPartnersPromotionsListResponse.prototype, "statusCode", void 0);
    return PaymentsresellersubscriptionPartnersPromotionsListResponse;
}(SpeakeasyBase));
export { PaymentsresellersubscriptionPartnersPromotionsListResponse };
