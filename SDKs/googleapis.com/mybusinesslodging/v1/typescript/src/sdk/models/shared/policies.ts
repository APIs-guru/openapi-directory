import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { PaymentOptions } from "./paymentoptions";


export enum PoliciesAllInclusiveAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesAllInclusiveOnlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesCheckinTimeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesCheckoutTimeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesKidsStayFreeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesMaxChildAgeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesMaxKidsStayFreeCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesSmokeFreePropertyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Policies
/** 
 * Property rules that impact guests.
**/
export class Policies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allInclusiveAvailable" })
  allInclusiveAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allInclusiveAvailableException" })
  allInclusiveAvailableException?: PoliciesAllInclusiveAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=allInclusiveOnly" })
  allInclusiveOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allInclusiveOnlyException" })
  allInclusiveOnlyException?: PoliciesAllInclusiveOnlyExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=checkinTime" })
  checkinTime?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=checkinTimeException" })
  checkinTimeException?: PoliciesCheckinTimeExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=checkoutTime" })
  checkoutTime?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=checkoutTimeException" })
  checkoutTimeException?: PoliciesCheckoutTimeExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=kidsStayFree" })
  kidsStayFree?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kidsStayFreeException" })
  kidsStayFreeException?: PoliciesKidsStayFreeExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=maxChildAge" })
  maxChildAge?: number;

  @SpeakeasyMetadata({ data: "json, name=maxChildAgeException" })
  maxChildAgeException?: PoliciesMaxChildAgeExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=maxKidsStayFreeCount" })
  maxKidsStayFreeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=maxKidsStayFreeCountException" })
  maxKidsStayFreeCountException?: PoliciesMaxKidsStayFreeCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=paymentOptions" })
  paymentOptions?: PaymentOptions;

  @SpeakeasyMetadata({ data: "json, name=smokeFreeProperty" })
  smokeFreeProperty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=smokeFreePropertyException" })
  smokeFreePropertyException?: PoliciesSmokeFreePropertyExceptionEnum;
}
