import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FoodAndDrinkBarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkBreakfastAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkBreakfastBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkDinnerBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkFreeBreakfastExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkRestaurantExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkRestaurantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkRoomServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkTableServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FoodAndDrinkVendingMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Meals, snacks, and beverages available at the property.
**/
export declare class FoodAndDrink extends SpeakeasyBase {
    bar?: boolean;
    barException?: FoodAndDrinkBarExceptionEnum;
    breakfastAvailable?: boolean;
    breakfastAvailableException?: FoodAndDrinkBreakfastAvailableExceptionEnum;
    breakfastBuffet?: boolean;
    breakfastBuffetException?: FoodAndDrinkBreakfastBuffetExceptionEnum;
    buffet?: boolean;
    buffetException?: FoodAndDrinkBuffetExceptionEnum;
    dinnerBuffet?: boolean;
    dinnerBuffetException?: FoodAndDrinkDinnerBuffetExceptionEnum;
    freeBreakfast?: boolean;
    freeBreakfastException?: FoodAndDrinkFreeBreakfastExceptionEnum;
    restaurant?: boolean;
    restaurantException?: FoodAndDrinkRestaurantExceptionEnum;
    restaurantsCount?: number;
    restaurantsCountException?: FoodAndDrinkRestaurantsCountExceptionEnum;
    roomService?: boolean;
    roomServiceException?: FoodAndDrinkRoomServiceExceptionEnum;
    tableService?: boolean;
    tableServiceException?: FoodAndDrinkTableServiceExceptionEnum;
    twentyFourHourRoomService?: boolean;
    twentyFourHourRoomServiceException?: FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum;
    vendingMachine?: boolean;
    vendingMachineException?: FoodAndDrinkVendingMachineExceptionEnum;
}
