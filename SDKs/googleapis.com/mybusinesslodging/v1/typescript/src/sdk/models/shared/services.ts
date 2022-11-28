import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageSpoken } from "./languagespoken";


export enum ServicesBaggageStorageExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesConciergeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesConvenienceStoreExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesCurrencyExchangeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesElevatorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesFrontDeskExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesFullServiceLaundryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesGiftShopExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesSelfServiceLaundryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesSocialHourExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesTwentyFourHourFrontDeskExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesWakeUpCallsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Services
/** 
 * Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
**/
export class Services extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baggageStorage" })
  baggageStorage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=baggageStorageException" })
  baggageStorageException?: ServicesBaggageStorageExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=concierge" })
  concierge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=conciergeException" })
  conciergeException?: ServicesConciergeExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=convenienceStore" })
  convenienceStore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=convenienceStoreException" })
  convenienceStoreException?: ServicesConvenienceStoreExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=currencyExchange" })
  currencyExchange?: boolean;

  @SpeakeasyMetadata({ data: "json, name=currencyExchangeException" })
  currencyExchangeException?: ServicesCurrencyExchangeExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=elevator" })
  elevator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=elevatorException" })
  elevatorException?: ServicesElevatorExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=frontDesk" })
  frontDesk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frontDeskException" })
  frontDeskException?: ServicesFrontDeskExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=fullServiceLaundry" })
  fullServiceLaundry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fullServiceLaundryException" })
  fullServiceLaundryException?: ServicesFullServiceLaundryExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=giftShop" })
  giftShop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=giftShopException" })
  giftShopException?: ServicesGiftShopExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=languagesSpoken", elemType: LanguageSpoken })
  languagesSpoken?: LanguageSpoken[];

  @SpeakeasyMetadata({ data: "json, name=selfServiceLaundry" })
  selfServiceLaundry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selfServiceLaundryException" })
  selfServiceLaundryException?: ServicesSelfServiceLaundryExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=socialHour" })
  socialHour?: boolean;

  @SpeakeasyMetadata({ data: "json, name=socialHourException" })
  socialHourException?: ServicesSocialHourExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=twentyFourHourFrontDesk" })
  twentyFourHourFrontDesk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=twentyFourHourFrontDeskException" })
  twentyFourHourFrontDeskException?: ServicesTwentyFourHourFrontDeskExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=wakeUpCalls" })
  wakeUpCalls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wakeUpCallsException" })
  wakeUpCallsException?: ServicesWakeUpCallsExceptionEnum;
}
