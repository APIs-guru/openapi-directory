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
var DeleteAccountsAccountOrdersCustomerOrderIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteAccountsAccountOrdersCustomerOrderIdPathParams, _super);
    function DeleteAccountsAccountOrdersCustomerOrderIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerOrderId" }),
        __metadata("design:type", String)
    ], DeleteAccountsAccountOrdersCustomerOrderIdPathParams.prototype, "customerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], DeleteAccountsAccountOrdersCustomerOrderIdPathParams.prototype, "account", void 0);
    return DeleteAccountsAccountOrdersCustomerOrderIdPathParams;
}(SpeakeasyBase));
export { DeleteAccountsAccountOrdersCustomerOrderIdPathParams };
var DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson, _super);
    function DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerOrderId" }),
        __metadata("design:type", String)
    ], DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "customerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderQty" }),
        __metadata("design:type", Number)
    ], DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "orderQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderType" }),
        __metadata("design:type", Number)
    ], DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "orderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Price" }),
        __metadata("design:type", String)
    ], DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Side" }),
        __metadata("design:type", Number)
    ], DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "side", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Symbol" }),
        __metadata("design:type", Number)
    ], DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "symbol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Warning" }),
        __metadata("design:type", String)
    ], DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "warning", void 0);
    return DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson;
}(SpeakeasyBase));
export { DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson };
var DeleteAccountsAccountOrdersCustomerOrderIdRequest = /** @class */ (function (_super) {
    __extends(DeleteAccountsAccountOrdersCustomerOrderIdRequest, _super);
    function DeleteAccountsAccountOrdersCustomerOrderIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAccountsAccountOrdersCustomerOrderIdPathParams)
    ], DeleteAccountsAccountOrdersCustomerOrderIdRequest.prototype, "pathParams", void 0);
    return DeleteAccountsAccountOrdersCustomerOrderIdRequest;
}(SpeakeasyBase));
export { DeleteAccountsAccountOrdersCustomerOrderIdRequest };
var DeleteAccountsAccountOrdersCustomerOrderIdResponse = /** @class */ (function (_super) {
    __extends(DeleteAccountsAccountOrdersCustomerOrderIdResponse, _super);
    function DeleteAccountsAccountOrdersCustomerOrderIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAccountsAccountOrdersCustomerOrderIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson }),
        __metadata("design:type", Array)
    ], DeleteAccountsAccountOrdersCustomerOrderIdResponse.prototype, "deleteAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAccountsAccountOrdersCustomerOrderIdResponse.prototype, "statusCode", void 0);
    return DeleteAccountsAccountOrdersCustomerOrderIdResponse;
}(SpeakeasyBase));
export { DeleteAccountsAccountOrdersCustomerOrderIdResponse };
