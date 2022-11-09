import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FoodAndDrinkBarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkBreakfastAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkBreakfastBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkDinnerBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkFreeBreakfastExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkRestaurantExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkRestaurantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkRoomServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkTableServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FoodAndDrinkVendingMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// FoodAndDrink
/** 
 * Meals, snacks, and beverages available at the property.
**/
export class FoodAndDrink extends SpeakeasyBase {
  @Metadata({ data: "json, name=bar" })
  bar?: boolean;

  @Metadata({ data: "json, name=barException" })
  barException?: FoodAndDrinkBarExceptionEnum;

  @Metadata({ data: "json, name=breakfastAvailable" })
  breakfastAvailable?: boolean;

  @Metadata({ data: "json, name=breakfastAvailableException" })
  breakfastAvailableException?: FoodAndDrinkBreakfastAvailableExceptionEnum;

  @Metadata({ data: "json, name=breakfastBuffet" })
  breakfastBuffet?: boolean;

  @Metadata({ data: "json, name=breakfastBuffetException" })
  breakfastBuffetException?: FoodAndDrinkBreakfastBuffetExceptionEnum;

  @Metadata({ data: "json, name=buffet" })
  buffet?: boolean;

  @Metadata({ data: "json, name=buffetException" })
  buffetException?: FoodAndDrinkBuffetExceptionEnum;

  @Metadata({ data: "json, name=dinnerBuffet" })
  dinnerBuffet?: boolean;

  @Metadata({ data: "json, name=dinnerBuffetException" })
  dinnerBuffetException?: FoodAndDrinkDinnerBuffetExceptionEnum;

  @Metadata({ data: "json, name=freeBreakfast" })
  freeBreakfast?: boolean;

  @Metadata({ data: "json, name=freeBreakfastException" })
  freeBreakfastException?: FoodAndDrinkFreeBreakfastExceptionEnum;

  @Metadata({ data: "json, name=restaurant" })
  restaurant?: boolean;

  @Metadata({ data: "json, name=restaurantException" })
  restaurantException?: FoodAndDrinkRestaurantExceptionEnum;

  @Metadata({ data: "json, name=restaurantsCount" })
  restaurantsCount?: number;

  @Metadata({ data: "json, name=restaurantsCountException" })
  restaurantsCountException?: FoodAndDrinkRestaurantsCountExceptionEnum;

  @Metadata({ data: "json, name=roomService" })
  roomService?: boolean;

  @Metadata({ data: "json, name=roomServiceException" })
  roomServiceException?: FoodAndDrinkRoomServiceExceptionEnum;

  @Metadata({ data: "json, name=tableService" })
  tableService?: boolean;

  @Metadata({ data: "json, name=tableServiceException" })
  tableServiceException?: FoodAndDrinkTableServiceExceptionEnum;

  @Metadata({ data: "json, name=twentyFourHourRoomService" })
  twentyFourHourRoomService?: boolean;

  @Metadata({ data: "json, name=twentyFourHourRoomServiceException" })
  twentyFourHourRoomServiceException?: FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum;

  @Metadata({ data: "json, name=vendingMachine" })
  vendingMachine?: boolean;

  @Metadata({ data: "json, name=vendingMachineException" })
  vendingMachineException?: FoodAndDrinkVendingMachineExceptionEnum;
}
