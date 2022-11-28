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
var ContentOrdersUpdatelineitemshippingdetailsPathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersUpdatelineitemshippingdetailsPathParams, _super);
    function ContentOrdersUpdatelineitemshippingdetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsPathParams.prototype, "orderId", void 0);
    return ContentOrdersUpdatelineitemshippingdetailsPathParams;
}(SpeakeasyBase));
export { ContentOrdersUpdatelineitemshippingdetailsPathParams };
var ContentOrdersUpdatelineitemshippingdetailsQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersUpdatelineitemshippingdetailsQueryParams, _super);
    function ContentOrdersUpdatelineitemshippingdetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersUpdatelineitemshippingdetailsQueryParams;
}(SpeakeasyBase));
export { ContentOrdersUpdatelineitemshippingdetailsQueryParams };
var ContentOrdersUpdatelineitemshippingdetailsSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersUpdatelineitemshippingdetailsSecurity, _super);
    function ContentOrdersUpdatelineitemshippingdetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersUpdatelineitemshippingdetailsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersUpdatelineitemshippingdetailsSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersUpdatelineitemshippingdetailsSecurity;
}(SpeakeasyBase));
export { ContentOrdersUpdatelineitemshippingdetailsSecurity };
var ContentOrdersUpdatelineitemshippingdetailsRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersUpdatelineitemshippingdetailsRequest, _super);
    function ContentOrdersUpdatelineitemshippingdetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersUpdatelineitemshippingdetailsPathParams)
    ], ContentOrdersUpdatelineitemshippingdetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersUpdatelineitemshippingdetailsQueryParams)
    ], ContentOrdersUpdatelineitemshippingdetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrdersUpdateLineItemShippingDetailsRequest)
    ], ContentOrdersUpdatelineitemshippingdetailsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersUpdatelineitemshippingdetailsSecurity)
    ], ContentOrdersUpdatelineitemshippingdetailsRequest.prototype, "security", void 0);
    return ContentOrdersUpdatelineitemshippingdetailsRequest;
}(SpeakeasyBase));
export { ContentOrdersUpdatelineitemshippingdetailsRequest };
var ContentOrdersUpdatelineitemshippingdetailsResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersUpdatelineitemshippingdetailsResponse, _super);
    function ContentOrdersUpdatelineitemshippingdetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersUpdatelineitemshippingdetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersUpdateLineItemShippingDetailsResponse)
    ], ContentOrdersUpdatelineitemshippingdetailsResponse.prototype, "ordersUpdateLineItemShippingDetailsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersUpdatelineitemshippingdetailsResponse.prototype, "statusCode", void 0);
    return ContentOrdersUpdatelineitemshippingdetailsResponse;
}(SpeakeasyBase));
export { ContentOrdersUpdatelineitemshippingdetailsResponse };
