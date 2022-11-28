import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompensationRange } from "./compensationrange";


export enum CompensationFilterTypeEnum {
    FilterTypeUnspecified = "FILTER_TYPE_UNSPECIFIED",
    UnitOnly = "UNIT_ONLY",
    UnitAndAmount = "UNIT_AND_AMOUNT",
    AnnualizedBaseAmount = "ANNUALIZED_BASE_AMOUNT",
    AnnualizedTotalAmount = "ANNUALIZED_TOTAL_AMOUNT"
}

export enum CompensationFilterUnitsEnum {
    CompensationUnitUnspecified = "COMPENSATION_UNIT_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Yearly = "YEARLY",
    OneTime = "ONE_TIME",
    OtherCompensationUnit = "OTHER_COMPENSATION_UNIT"
}


// CompensationFilter
/** 
 * Filter on job compensation type and amount.
**/
export class CompensationFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeJobsWithUnspecifiedCompensationRange" })
  includeJobsWithUnspecifiedCompensationRange?: boolean;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: CompensationRange;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CompensationFilterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: CompensationFilterUnitsEnum[];
}
