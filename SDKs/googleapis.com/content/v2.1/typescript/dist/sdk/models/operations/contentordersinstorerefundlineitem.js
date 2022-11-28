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
var ContentOrdersInstorerefundlineitemPathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersInstorerefundlineitemPathParams, _super);
    function ContentOrdersInstorerefundlineitemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemPathParams.prototype, "orderId", void 0);
    return ContentOrdersInstorerefundlineitemPathParams;
}(SpeakeasyBase));
export { ContentOrdersInstorerefundlineitemPathParams };
var ContentOrdersInstorerefundlineitemQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersInstorerefundlineitemQueryParams, _super);
    function ContentOrdersInstorerefundlineitemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersInstorerefundlineitemQueryParams;
}(SpeakeasyBase));
export { ContentOrdersInstorerefundlineitemQueryParams };
var ContentOrdersInstorerefundlineitemSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersInstorerefundlineitemSecurity, _super);
    function ContentOrdersInstorerefundlineitemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersInstorerefundlineitemSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersInstorerefundlineitemSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersInstorerefundlineitemSecurity;
}(SpeakeasyBase));
export { ContentOrdersInstorerefundlineitemSecurity };
var ContentOrdersInstorerefundlineitemRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersInstorerefundlineitemRequest, _super);
    function ContentOrdersInstorerefundlineitemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersInstorerefundlineitemPathParams)
    ], ContentOrdersInstorerefundlineitemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersInstorerefundlineitemQueryParams)
    ], ContentOrdersInstorerefundlineitemRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrdersInStoreRefundLineItemRequest)
    ], ContentOrdersInstorerefundlineitemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersInstorerefundlineitemSecurity)
    ], ContentOrdersInstorerefundlineitemRequest.prototype, "security", void 0);
    return ContentOrdersInstorerefundlineitemRequest;
}(SpeakeasyBase));
export { ContentOrdersInstorerefundlineitemRequest };
var ContentOrdersInstorerefundlineitemResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersInstorerefundlineitemResponse, _super);
    function ContentOrdersInstorerefundlineitemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersInstorerefundlineitemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersInStoreRefundLineItemResponse)
    ], ContentOrdersInstorerefundlineitemResponse.prototype, "ordersInStoreRefundLineItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersInstorerefundlineitemResponse.prototype, "statusCode", void 0);
    return ContentOrdersInstorerefundlineitemResponse;
}(SpeakeasyBase));
export { ContentOrdersInstorerefundlineitemResponse };
