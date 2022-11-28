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
export var FoodAndDrinkBarExceptionEnum;
(function (FoodAndDrinkBarExceptionEnum) {
    FoodAndDrinkBarExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkBarExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkBarExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkBarExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkBarExceptionEnum || (FoodAndDrinkBarExceptionEnum = {}));
export var FoodAndDrinkBreakfastAvailableExceptionEnum;
(function (FoodAndDrinkBreakfastAvailableExceptionEnum) {
    FoodAndDrinkBreakfastAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkBreakfastAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkBreakfastAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkBreakfastAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkBreakfastAvailableExceptionEnum || (FoodAndDrinkBreakfastAvailableExceptionEnum = {}));
export var FoodAndDrinkBreakfastBuffetExceptionEnum;
(function (FoodAndDrinkBreakfastBuffetExceptionEnum) {
    FoodAndDrinkBreakfastBuffetExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkBreakfastBuffetExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkBreakfastBuffetExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkBreakfastBuffetExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkBreakfastBuffetExceptionEnum || (FoodAndDrinkBreakfastBuffetExceptionEnum = {}));
export var FoodAndDrinkBuffetExceptionEnum;
(function (FoodAndDrinkBuffetExceptionEnum) {
    FoodAndDrinkBuffetExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkBuffetExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkBuffetExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkBuffetExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkBuffetExceptionEnum || (FoodAndDrinkBuffetExceptionEnum = {}));
export var FoodAndDrinkDinnerBuffetExceptionEnum;
(function (FoodAndDrinkDinnerBuffetExceptionEnum) {
    FoodAndDrinkDinnerBuffetExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkDinnerBuffetExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkDinnerBuffetExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkDinnerBuffetExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkDinnerBuffetExceptionEnum || (FoodAndDrinkDinnerBuffetExceptionEnum = {}));
export var FoodAndDrinkFreeBreakfastExceptionEnum;
(function (FoodAndDrinkFreeBreakfastExceptionEnum) {
    FoodAndDrinkFreeBreakfastExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkFreeBreakfastExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkFreeBreakfastExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkFreeBreakfastExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkFreeBreakfastExceptionEnum || (FoodAndDrinkFreeBreakfastExceptionEnum = {}));
export var FoodAndDrinkRestaurantExceptionEnum;
(function (FoodAndDrinkRestaurantExceptionEnum) {
    FoodAndDrinkRestaurantExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkRestaurantExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkRestaurantExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkRestaurantExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkRestaurantExceptionEnum || (FoodAndDrinkRestaurantExceptionEnum = {}));
export var FoodAndDrinkRestaurantsCountExceptionEnum;
(function (FoodAndDrinkRestaurantsCountExceptionEnum) {
    FoodAndDrinkRestaurantsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkRestaurantsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkRestaurantsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkRestaurantsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkRestaurantsCountExceptionEnum || (FoodAndDrinkRestaurantsCountExceptionEnum = {}));
export var FoodAndDrinkRoomServiceExceptionEnum;
(function (FoodAndDrinkRoomServiceExceptionEnum) {
    FoodAndDrinkRoomServiceExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkRoomServiceExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkRoomServiceExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkRoomServiceExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkRoomServiceExceptionEnum || (FoodAndDrinkRoomServiceExceptionEnum = {}));
export var FoodAndDrinkTableServiceExceptionEnum;
(function (FoodAndDrinkTableServiceExceptionEnum) {
    FoodAndDrinkTableServiceExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkTableServiceExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkTableServiceExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkTableServiceExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkTableServiceExceptionEnum || (FoodAndDrinkTableServiceExceptionEnum = {}));
export var FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum;
(function (FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum) {
    FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum || (FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum = {}));
export var FoodAndDrinkVendingMachineExceptionEnum;
(function (FoodAndDrinkVendingMachineExceptionEnum) {
    FoodAndDrinkVendingMachineExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FoodAndDrinkVendingMachineExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FoodAndDrinkVendingMachineExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FoodAndDrinkVendingMachineExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FoodAndDrinkVendingMachineExceptionEnum || (FoodAndDrinkVendingMachineExceptionEnum = {}));
// FoodAndDrink
/**
 * Meals, snacks, and beverages available at the property.
**/
var FoodAndDrink = /** @class */ (function (_super) {
    __extends(FoodAndDrink, _super);
    function FoodAndDrink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bar" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "bar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "barException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breakfastAvailable" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "breakfastAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breakfastAvailableException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "breakfastAvailableException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breakfastBuffet" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "breakfastBuffet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breakfastBuffetException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "breakfastBuffetException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buffet" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "buffet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buffetException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "buffetException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dinnerBuffet" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "dinnerBuffet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dinnerBuffetException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "dinnerBuffetException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeBreakfast" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "freeBreakfast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeBreakfastException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "freeBreakfastException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restaurant" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "restaurant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restaurantException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "restaurantException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restaurantsCount" }),
        __metadata("design:type", Number)
    ], FoodAndDrink.prototype, "restaurantsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restaurantsCountException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "restaurantsCountException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roomService" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "roomService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roomServiceException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "roomServiceException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableService" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "tableService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableServiceException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "tableServiceException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twentyFourHourRoomService" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "twentyFourHourRoomService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twentyFourHourRoomServiceException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "twentyFourHourRoomServiceException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendingMachine" }),
        __metadata("design:type", Boolean)
    ], FoodAndDrink.prototype, "vendingMachine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendingMachineException" }),
        __metadata("design:type", String)
    ], FoodAndDrink.prototype, "vendingMachineException", void 0);
    return FoodAndDrink;
}(SpeakeasyBase));
export { FoodAndDrink };
