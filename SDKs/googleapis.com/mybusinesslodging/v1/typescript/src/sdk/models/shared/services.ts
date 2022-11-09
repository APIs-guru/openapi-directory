import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LanguageSpoken } from "./languagespoken";

export enum ServicesBaggageStorageExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesConciergeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesConvenienceStoreExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesCurrencyExchangeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesElevatorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesFrontDeskExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesFullServiceLaundryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesGiftShopExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesSelfServiceLaundryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesSocialHourExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesTwentyFourHourFrontDeskExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ServicesWakeUpCallsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Services
/** 
 * Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
**/
export class Services extends SpeakeasyBase {
  @Metadata({ data: "json, name=baggageStorage" })
  baggageStorage?: boolean;

  @Metadata({ data: "json, name=baggageStorageException" })
  baggageStorageException?: ServicesBaggageStorageExceptionEnum;

  @Metadata({ data: "json, name=concierge" })
  concierge?: boolean;

  @Metadata({ data: "json, name=conciergeException" })
  conciergeException?: ServicesConciergeExceptionEnum;

  @Metadata({ data: "json, name=convenienceStore" })
  convenienceStore?: boolean;

  @Metadata({ data: "json, name=convenienceStoreException" })
  convenienceStoreException?: ServicesConvenienceStoreExceptionEnum;

  @Metadata({ data: "json, name=currencyExchange" })
  currencyExchange?: boolean;

  @Metadata({ data: "json, name=currencyExchangeException" })
  currencyExchangeException?: ServicesCurrencyExchangeExceptionEnum;

  @Metadata({ data: "json, name=elevator" })
  elevator?: boolean;

  @Metadata({ data: "json, name=elevatorException" })
  elevatorException?: ServicesElevatorExceptionEnum;

  @Metadata({ data: "json, name=frontDesk" })
  frontDesk?: boolean;

  @Metadata({ data: "json, name=frontDeskException" })
  frontDeskException?: ServicesFrontDeskExceptionEnum;

  @Metadata({ data: "json, name=fullServiceLaundry" })
  fullServiceLaundry?: boolean;

  @Metadata({ data: "json, name=fullServiceLaundryException" })
  fullServiceLaundryException?: ServicesFullServiceLaundryExceptionEnum;

  @Metadata({ data: "json, name=giftShop" })
  giftShop?: boolean;

  @Metadata({ data: "json, name=giftShopException" })
  giftShopException?: ServicesGiftShopExceptionEnum;

  @Metadata({ data: "json, name=languagesSpoken", elemType: shared.LanguageSpoken })
  languagesSpoken?: LanguageSpoken[];

  @Metadata({ data: "json, name=selfServiceLaundry" })
  selfServiceLaundry?: boolean;

  @Metadata({ data: "json, name=selfServiceLaundryException" })
  selfServiceLaundryException?: ServicesSelfServiceLaundryExceptionEnum;

  @Metadata({ data: "json, name=socialHour" })
  socialHour?: boolean;

  @Metadata({ data: "json, name=socialHourException" })
  socialHourException?: ServicesSocialHourExceptionEnum;

  @Metadata({ data: "json, name=twentyFourHourFrontDesk" })
  twentyFourHourFrontDesk?: boolean;

  @Metadata({ data: "json, name=twentyFourHourFrontDeskException" })
  twentyFourHourFrontDeskException?: ServicesTwentyFourHourFrontDeskExceptionEnum;

  @Metadata({ data: "json, name=wakeUpCalls" })
  wakeUpCalls?: boolean;

  @Metadata({ data: "json, name=wakeUpCallsException" })
  wakeUpCallsException?: ServicesWakeUpCallsExceptionEnum;
}
