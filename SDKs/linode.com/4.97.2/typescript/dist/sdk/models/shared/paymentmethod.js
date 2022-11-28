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
// PaymentMethodData
/**
 * Credit card information.
**/
var PaymentMethodData = /** @class */ (function (_super) {
    __extends(PaymentMethodData, _super);
    function PaymentMethodData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_type" }),
        __metadata("design:type", String)
    ], PaymentMethodData.prototype, "cardType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", String)
    ], PaymentMethodData.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_four" }),
        __metadata("design:type", String)
    ], PaymentMethodData.prototype, "lastFour", void 0);
    return PaymentMethodData;
}(SpeakeasyBase));
export { PaymentMethodData };
export var PaymentMethodTypeEnum;
(function (PaymentMethodTypeEnum) {
    PaymentMethodTypeEnum["CreditCard"] = "credit_card";
})(PaymentMethodTypeEnum || (PaymentMethodTypeEnum = {}));
// PaymentMethod
/**
 * Payment Method Response Object.
**/
var PaymentMethod = /** @class */ (function (_super) {
    __extends(PaymentMethod, _super);
    function PaymentMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], PaymentMethod.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", PaymentMethodData)
    ], PaymentMethod.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], PaymentMethod.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PaymentMethod.prototype, "type", void 0);
    return PaymentMethod;
}(SpeakeasyBase));
export { PaymentMethod };
