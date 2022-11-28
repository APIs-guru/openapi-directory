import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FoodAndDrinkBarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkBreakfastAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkBreakfastBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkDinnerBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkFreeBreakfastExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkRestaurantExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkRestaurantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkRoomServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkTableServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkVendingMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// FoodAndDrink
/** 
 * Meals, snacks, and beverages available at the property.
**/
export class FoodAndDrink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bar" })
  bar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=barException" })
  barException?: FoodAndDrinkBarExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=breakfastAvailable" })
  breakfastAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=breakfastAvailableException" })
  breakfastAvailableException?: FoodAndDrinkBreakfastAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=breakfastBuffet" })
  breakfastBuffet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=breakfastBuffetException" })
  breakfastBuffetException?: FoodAndDrinkBreakfastBuffetExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=buffet" })
  buffet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=buffetException" })
  buffetException?: FoodAndDrinkBuffetExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=dinnerBuffet" })
  dinnerBuffet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dinnerBuffetException" })
  dinnerBuffetException?: FoodAndDrinkDinnerBuffetExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freeBreakfast" })
  freeBreakfast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeBreakfastException" })
  freeBreakfastException?: FoodAndDrinkFreeBreakfastExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=restaurant" })
  restaurant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restaurantException" })
  restaurantException?: FoodAndDrinkRestaurantExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=restaurantsCount" })
  restaurantsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=restaurantsCountException" })
  restaurantsCountException?: FoodAndDrinkRestaurantsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=roomService" })
  roomService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roomServiceException" })
  roomServiceException?: FoodAndDrinkRoomServiceExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=tableService" })
  tableService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tableServiceException" })
  tableServiceException?: FoodAndDrinkTableServiceExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=twentyFourHourRoomService" })
  twentyFourHourRoomService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=twentyFourHourRoomServiceException" })
  twentyFourHourRoomServiceException?: FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=vendingMachine" })
  vendingMachine?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vendingMachineException" })
  vendingMachineException?: FoodAndDrinkVendingMachineExceptionEnum;
}
