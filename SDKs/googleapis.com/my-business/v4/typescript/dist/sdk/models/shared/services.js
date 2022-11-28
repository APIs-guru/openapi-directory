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
import { LanguagesSpoken } from "./languagesspoken";
export var ServicesBaggageStorageExceptionEnum;
(function (ServicesBaggageStorageExceptionEnum) {
    ServicesBaggageStorageExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesBaggageStorageExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesBaggageStorageExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesBaggageStorageExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesBaggageStorageExceptionEnum || (ServicesBaggageStorageExceptionEnum = {}));
export var ServicesConciergeExceptionEnum;
(function (ServicesConciergeExceptionEnum) {
    ServicesConciergeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesConciergeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesConciergeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesConciergeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesConciergeExceptionEnum || (ServicesConciergeExceptionEnum = {}));
export var ServicesConvenienceStoreExceptionEnum;
(function (ServicesConvenienceStoreExceptionEnum) {
    ServicesConvenienceStoreExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesConvenienceStoreExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesConvenienceStoreExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesConvenienceStoreExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesConvenienceStoreExceptionEnum || (ServicesConvenienceStoreExceptionEnum = {}));
export var ServicesCurrencyExchangeExceptionEnum;
(function (ServicesCurrencyExchangeExceptionEnum) {
    ServicesCurrencyExchangeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesCurrencyExchangeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesCurrencyExchangeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesCurrencyExchangeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesCurrencyExchangeExceptionEnum || (ServicesCurrencyExchangeExceptionEnum = {}));
export var ServicesElevatorExceptionEnum;
(function (ServicesElevatorExceptionEnum) {
    ServicesElevatorExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesElevatorExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesElevatorExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesElevatorExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesElevatorExceptionEnum || (ServicesElevatorExceptionEnum = {}));
export var ServicesFrontDeskExceptionEnum;
(function (ServicesFrontDeskExceptionEnum) {
    ServicesFrontDeskExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesFrontDeskExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesFrontDeskExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesFrontDeskExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesFrontDeskExceptionEnum || (ServicesFrontDeskExceptionEnum = {}));
export var ServicesFullServiceLaundryExceptionEnum;
(function (ServicesFullServiceLaundryExceptionEnum) {
    ServicesFullServiceLaundryExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesFullServiceLaundryExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesFullServiceLaundryExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesFullServiceLaundryExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesFullServiceLaundryExceptionEnum || (ServicesFullServiceLaundryExceptionEnum = {}));
export var ServicesGiftShopExceptionEnum;
(function (ServicesGiftShopExceptionEnum) {
    ServicesGiftShopExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesGiftShopExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesGiftShopExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesGiftShopExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesGiftShopExceptionEnum || (ServicesGiftShopExceptionEnum = {}));
export var ServicesSelfServiceLaundryExceptionEnum;
(function (ServicesSelfServiceLaundryExceptionEnum) {
    ServicesSelfServiceLaundryExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesSelfServiceLaundryExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesSelfServiceLaundryExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesSelfServiceLaundryExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesSelfServiceLaundryExceptionEnum || (ServicesSelfServiceLaundryExceptionEnum = {}));
export var ServicesSocialHourExceptionEnum;
(function (ServicesSocialHourExceptionEnum) {
    ServicesSocialHourExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesSocialHourExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesSocialHourExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesSocialHourExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesSocialHourExceptionEnum || (ServicesSocialHourExceptionEnum = {}));
export var ServicesTwentyFourHourFrontDeskExceptionEnum;
(function (ServicesTwentyFourHourFrontDeskExceptionEnum) {
    ServicesTwentyFourHourFrontDeskExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesTwentyFourHourFrontDeskExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesTwentyFourHourFrontDeskExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesTwentyFourHourFrontDeskExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesTwentyFourHourFrontDeskExceptionEnum || (ServicesTwentyFourHourFrontDeskExceptionEnum = {}));
export var ServicesWakeUpCallsExceptionEnum;
(function (ServicesWakeUpCallsExceptionEnum) {
    ServicesWakeUpCallsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ServicesWakeUpCallsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ServicesWakeUpCallsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ServicesWakeUpCallsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ServicesWakeUpCallsExceptionEnum || (ServicesWakeUpCallsExceptionEnum = {}));
// Services
/**
 * Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
**/
var Services = /** @class */ (function (_super) {
    __extends(Services, _super);
    function Services() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baggageStorage" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "baggageStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baggageStorageException" }),
        __metadata("design:type", String)
    ], Services.prototype, "baggageStorageException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concierge" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "concierge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conciergeException" }),
        __metadata("design:type", String)
    ], Services.prototype, "conciergeException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=convenienceStore" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "convenienceStore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=convenienceStoreException" }),
        __metadata("design:type", String)
    ], Services.prototype, "convenienceStoreException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyExchange" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "currencyExchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyExchangeException" }),
        __metadata("design:type", String)
    ], Services.prototype, "currencyExchangeException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elevator" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "elevator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elevatorException" }),
        __metadata("design:type", String)
    ], Services.prototype, "elevatorException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frontDesk" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "frontDesk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frontDeskException" }),
        __metadata("design:type", String)
    ], Services.prototype, "frontDeskException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullServiceLaundry" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "fullServiceLaundry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullServiceLaundryException" }),
        __metadata("design:type", String)
    ], Services.prototype, "fullServiceLaundryException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=giftShop" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "giftShop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=giftShopException" }),
        __metadata("design:type", String)
    ], Services.prototype, "giftShopException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languagesSpoken" }),
        __metadata("design:type", LanguagesSpoken)
    ], Services.prototype, "languagesSpoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfServiceLaundry" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "selfServiceLaundry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfServiceLaundryException" }),
        __metadata("design:type", String)
    ], Services.prototype, "selfServiceLaundryException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socialHour" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "socialHour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socialHourException" }),
        __metadata("design:type", String)
    ], Services.prototype, "socialHourException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twentyFourHourFrontDesk" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "twentyFourHourFrontDesk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twentyFourHourFrontDeskException" }),
        __metadata("design:type", String)
    ], Services.prototype, "twentyFourHourFrontDeskException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wakeUpCalls" }),
        __metadata("design:type", Boolean)
    ], Services.prototype, "wakeUpCalls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wakeUpCallsException" }),
        __metadata("design:type", String)
    ], Services.prototype, "wakeUpCallsException", void 0);
    return Services;
}(SpeakeasyBase));
export { Services };
