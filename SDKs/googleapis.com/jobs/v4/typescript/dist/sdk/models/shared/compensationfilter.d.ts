import { SpeakeasyBase } from "../../../internal/utils";
import { CompensationRange } from "./compensationrange";
export declare enum CompensationFilterTypeEnum {
    FilterTypeUnspecified = "FILTER_TYPE_UNSPECIFIED",
    UnitOnly = "UNIT_ONLY",
    UnitAndAmount = "UNIT_AND_AMOUNT",
    AnnualizedBaseAmount = "ANNUALIZED_BASE_AMOUNT",
    AnnualizedTotalAmount = "ANNUALIZED_TOTAL_AMOUNT"
}
export declare enum CompensationFilterUnitsEnum {
    CompensationUnitUnspecified = "COMPENSATION_UNIT_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Yearly = "YEARLY",
    OneTime = "ONE_TIME",
    OtherCompensationUnit = "OTHER_COMPENSATION_UNIT"
}
/**
 * Filter on job compensation type and amount.
**/
export declare class CompensationFilter extends SpeakeasyBase {
    includeJobsWithUnspecifiedCompensationRange?: boolean;
    range?: CompensationRange;
    type?: CompensationFilterTypeEnum;
    units?: CompensationFilterUnitsEnum[];
}
