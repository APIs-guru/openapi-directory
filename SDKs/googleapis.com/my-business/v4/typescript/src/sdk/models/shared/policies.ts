import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeOfDay } from "./timeofday";
import { TimeOfDay } from "./timeofday";
import { PaymentOptions } from "./paymentoptions";

export enum PoliciesAllInclusiveAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesAllInclusiveOnlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesCheckinTimeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesCheckoutTimeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesKidsStayFreeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesMaxChildAgeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesMaxKidsStayFreeCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoliciesSmokeFreePropertyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Policies
/** 
 * Property rules that impact guests.
**/
export class Policies extends SpeakeasyBase {
  @Metadata({ data: "json, name=allInclusiveAvailable" })
  allInclusiveAvailable?: boolean;

  @Metadata({ data: "json, name=allInclusiveAvailableException" })
  allInclusiveAvailableException?: PoliciesAllInclusiveAvailableExceptionEnum;

  @Metadata({ data: "json, name=allInclusiveOnly" })
  allInclusiveOnly?: boolean;

  @Metadata({ data: "json, name=allInclusiveOnlyException" })
  allInclusiveOnlyException?: PoliciesAllInclusiveOnlyExceptionEnum;

  @Metadata({ data: "json, name=checkinTime" })
  checkinTime?: TimeOfDay;

  @Metadata({ data: "json, name=checkinTimeException" })
  checkinTimeException?: PoliciesCheckinTimeExceptionEnum;

  @Metadata({ data: "json, name=checkoutTime" })
  checkoutTime?: TimeOfDay;

  @Metadata({ data: "json, name=checkoutTimeException" })
  checkoutTimeException?: PoliciesCheckoutTimeExceptionEnum;

  @Metadata({ data: "json, name=kidsStayFree" })
  kidsStayFree?: boolean;

  @Metadata({ data: "json, name=kidsStayFreeException" })
  kidsStayFreeException?: PoliciesKidsStayFreeExceptionEnum;

  @Metadata({ data: "json, name=maxChildAge" })
  maxChildAge?: number;

  @Metadata({ data: "json, name=maxChildAgeException" })
  maxChildAgeException?: PoliciesMaxChildAgeExceptionEnum;

  @Metadata({ data: "json, name=maxKidsStayFreeCount" })
  maxKidsStayFreeCount?: number;

  @Metadata({ data: "json, name=maxKidsStayFreeCountException" })
  maxKidsStayFreeCountException?: PoliciesMaxKidsStayFreeCountExceptionEnum;

  @Metadata({ data: "json, name=paymentOptions" })
  paymentOptions?: PaymentOptions;

  @Metadata({ data: "json, name=smokeFreeProperty" })
  smokeFreeProperty?: boolean;

  @Metadata({ data: "json, name=smokeFreePropertyException" })
  smokeFreePropertyException?: PoliciesSmokeFreePropertyExceptionEnum;
}
