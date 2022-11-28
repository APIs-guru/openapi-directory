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
var ContentOrdersReturnrefundlineitemPathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersReturnrefundlineitemPathParams, _super);
    function ContentOrdersReturnrefundlineitemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemPathParams.prototype, "orderId", void 0);
    return ContentOrdersReturnrefundlineitemPathParams;
}(SpeakeasyBase));
export { ContentOrdersReturnrefundlineitemPathParams };
var ContentOrdersReturnrefundlineitemQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersReturnrefundlineitemQueryParams, _super);
    function ContentOrdersReturnrefundlineitemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersReturnrefundlineitemQueryParams;
}(SpeakeasyBase));
export { ContentOrdersReturnrefundlineitemQueryParams };
var ContentOrdersReturnrefundlineitemSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersReturnrefundlineitemSecurity, _super);
    function ContentOrdersReturnrefundlineitemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersReturnrefundlineitemSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersReturnrefundlineitemSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersReturnrefundlineitemSecurity;
}(SpeakeasyBase));
export { ContentOrdersReturnrefundlineitemSecurity };
var ContentOrdersReturnrefundlineitemRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersReturnrefundlineitemRequest, _super);
    function ContentOrdersReturnrefundlineitemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersReturnrefundlineitemPathParams)
    ], ContentOrdersReturnrefundlineitemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersReturnrefundlineitemQueryParams)
    ], ContentOrdersReturnrefundlineitemRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrdersReturnRefundLineItemRequest)
    ], ContentOrdersReturnrefundlineitemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersReturnrefundlineitemSecurity)
    ], ContentOrdersReturnrefundlineitemRequest.prototype, "security", void 0);
    return ContentOrdersReturnrefundlineitemRequest;
}(SpeakeasyBase));
export { ContentOrdersReturnrefundlineitemRequest };
var ContentOrdersReturnrefundlineitemResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersReturnrefundlineitemResponse, _super);
    function ContentOrdersReturnrefundlineitemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersReturnrefundlineitemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersReturnRefundLineItemResponse)
    ], ContentOrdersReturnrefundlineitemResponse.prototype, "ordersReturnRefundLineItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersReturnrefundlineitemResponse.prototype, "statusCode", void 0);
    return ContentOrdersReturnrefundlineitemResponse;
}(SpeakeasyBase));
export { ContentOrdersReturnrefundlineitemResponse };
