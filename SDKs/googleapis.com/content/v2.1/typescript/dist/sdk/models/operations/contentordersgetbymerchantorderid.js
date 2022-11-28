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
var ContentOrdersGetbymerchantorderidPathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersGetbymerchantorderidPathParams, _super);
    function ContentOrdersGetbymerchantorderidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantOrderId" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidPathParams.prototype, "merchantOrderId", void 0);
    return ContentOrdersGetbymerchantorderidPathParams;
}(SpeakeasyBase));
export { ContentOrdersGetbymerchantorderidPathParams };
var ContentOrdersGetbymerchantorderidQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersGetbymerchantorderidQueryParams, _super);
    function ContentOrdersGetbymerchantorderidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersGetbymerchantorderidQueryParams;
}(SpeakeasyBase));
export { ContentOrdersGetbymerchantorderidQueryParams };
var ContentOrdersGetbymerchantorderidSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersGetbymerchantorderidSecurity, _super);
    function ContentOrdersGetbymerchantorderidSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersGetbymerchantorderidSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersGetbymerchantorderidSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersGetbymerchantorderidSecurity;
}(SpeakeasyBase));
export { ContentOrdersGetbymerchantorderidSecurity };
var ContentOrdersGetbymerchantorderidRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersGetbymerchantorderidRequest, _super);
    function ContentOrdersGetbymerchantorderidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersGetbymerchantorderidPathParams)
    ], ContentOrdersGetbymerchantorderidRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersGetbymerchantorderidQueryParams)
    ], ContentOrdersGetbymerchantorderidRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersGetbymerchantorderidSecurity)
    ], ContentOrdersGetbymerchantorderidRequest.prototype, "security", void 0);
    return ContentOrdersGetbymerchantorderidRequest;
}(SpeakeasyBase));
export { ContentOrdersGetbymerchantorderidRequest };
var ContentOrdersGetbymerchantorderidResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersGetbymerchantorderidResponse, _super);
    function ContentOrdersGetbymerchantorderidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersGetbymerchantorderidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersGetByMerchantOrderIdResponse)
    ], ContentOrdersGetbymerchantorderidResponse.prototype, "ordersGetByMerchantOrderIdResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersGetbymerchantorderidResponse.prototype, "statusCode", void 0);
    return ContentOrdersGetbymerchantorderidResponse;
}(SpeakeasyBase));
export { ContentOrdersGetbymerchantorderidResponse };
