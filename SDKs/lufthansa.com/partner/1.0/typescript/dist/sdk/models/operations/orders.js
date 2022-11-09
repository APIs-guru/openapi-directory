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
var OrdersPathParams = /** @class */ (function (_super) {
    __extends(OrdersPathParams, _super);
    function OrdersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OrdersPathParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=orderID" }),
        __metadata("design:type", String)
    ], OrdersPathParams.prototype, "orderId", void 0);
    return OrdersPathParams;
}(SpeakeasyBase));
export { OrdersPathParams };
var OrdersHeaders = /** @class */ (function (_super) {
    __extends(OrdersHeaders, _super);
    function OrdersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OrdersHeaders.prototype, "accept", void 0);
    return OrdersHeaders;
}(SpeakeasyBase));
export { OrdersHeaders };
var OrdersSecurity = /** @class */ (function (_super) {
    __extends(OrdersSecurity, _super);
    function OrdersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OrdersSecurity.prototype, "auth", void 0);
    return OrdersSecurity;
}(SpeakeasyBase));
export { OrdersSecurity };
var OrdersRequest = /** @class */ (function (_super) {
    __extends(OrdersRequest, _super);
    function OrdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OrdersPathParams)
    ], OrdersRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrdersHeaders)
    ], OrdersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrdersSecurity)
    ], OrdersRequest.prototype, "security", void 0);
    return OrdersRequest;
}(SpeakeasyBase));
export { OrdersRequest };
var OrdersResponse = /** @class */ (function (_super) {
    __extends(OrdersResponse, _super);
    function OrdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OrdersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OrdersResponse.prototype, "orders200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OrdersResponse.prototype, "statusCode", void 0);
    return OrdersResponse;
}(SpeakeasyBase));
export { OrdersResponse };
