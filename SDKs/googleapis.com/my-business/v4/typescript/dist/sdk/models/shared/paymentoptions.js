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
export var PaymentOptionsCashExceptionEnum;
(function (PaymentOptionsCashExceptionEnum) {
    PaymentOptionsCashExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PaymentOptionsCashExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PaymentOptionsCashExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PaymentOptionsCashExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PaymentOptionsCashExceptionEnum || (PaymentOptionsCashExceptionEnum = {}));
export var PaymentOptionsChequeExceptionEnum;
(function (PaymentOptionsChequeExceptionEnum) {
    PaymentOptionsChequeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PaymentOptionsChequeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PaymentOptionsChequeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PaymentOptionsChequeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PaymentOptionsChequeExceptionEnum || (PaymentOptionsChequeExceptionEnum = {}));
export var PaymentOptionsCreditCardExceptionEnum;
(function (PaymentOptionsCreditCardExceptionEnum) {
    PaymentOptionsCreditCardExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PaymentOptionsCreditCardExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PaymentOptionsCreditCardExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PaymentOptionsCreditCardExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PaymentOptionsCreditCardExceptionEnum || (PaymentOptionsCreditCardExceptionEnum = {}));
export var PaymentOptionsDebitCardExceptionEnum;
(function (PaymentOptionsDebitCardExceptionEnum) {
    PaymentOptionsDebitCardExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PaymentOptionsDebitCardExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PaymentOptionsDebitCardExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PaymentOptionsDebitCardExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PaymentOptionsDebitCardExceptionEnum || (PaymentOptionsDebitCardExceptionEnum = {}));
export var PaymentOptionsMobileNfcExceptionEnum;
(function (PaymentOptionsMobileNfcExceptionEnum) {
    PaymentOptionsMobileNfcExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PaymentOptionsMobileNfcExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PaymentOptionsMobileNfcExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PaymentOptionsMobileNfcExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PaymentOptionsMobileNfcExceptionEnum || (PaymentOptionsMobileNfcExceptionEnum = {}));
// PaymentOptions
/**
 * Forms of payment accepted at the property.
**/
var PaymentOptions = /** @class */ (function (_super) {
    __extends(PaymentOptions, _super);
    function PaymentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash" }),
        __metadata("design:type", Boolean)
    ], PaymentOptions.prototype, "cash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cashException" }),
        __metadata("design:type", String)
    ], PaymentOptions.prototype, "cashException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cheque" }),
        __metadata("design:type", Boolean)
    ], PaymentOptions.prototype, "cheque", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chequeException" }),
        __metadata("design:type", String)
    ], PaymentOptions.prototype, "chequeException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditCard" }),
        __metadata("design:type", Boolean)
    ], PaymentOptions.prototype, "creditCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditCardException" }),
        __metadata("design:type", String)
    ], PaymentOptions.prototype, "creditCardException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debitCard" }),
        __metadata("design:type", Boolean)
    ], PaymentOptions.prototype, "debitCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debitCardException" }),
        __metadata("design:type", String)
    ], PaymentOptions.prototype, "debitCardException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileNfc" }),
        __metadata("design:type", Boolean)
    ], PaymentOptions.prototype, "mobileNfc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileNfcException" }),
        __metadata("design:type", String)
    ], PaymentOptions.prototype, "mobileNfcException", void 0);
    return PaymentOptions;
}(SpeakeasyBase));
export { PaymentOptions };
