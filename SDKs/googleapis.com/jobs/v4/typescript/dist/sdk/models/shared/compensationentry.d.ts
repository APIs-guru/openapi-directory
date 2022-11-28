import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { CompensationRange } from "./compensationrange";
export declare enum CompensationEntryTypeEnum {
    CompensationTypeUnspecified = "COMPENSATION_TYPE_UNSPECIFIED",
    Base = "BASE",
    Bonus = "BONUS",
    SigningBonus = "SIGNING_BONUS",
    Equity = "EQUITY",
    ProfitSharing = "PROFIT_SHARING",
    Commissions = "COMMISSIONS",
    Tips = "TIPS",
    OtherCompensationType = "OTHER_COMPENSATION_TYPE"
}
export declare enum CompensationEntryUnitEnum {
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
 * A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year.
**/
export declare class CompensationEntry extends SpeakeasyBase {
    amount?: Money;
    description?: string;
    expectedUnitsPerYear?: number;
    range?: CompensationRange;
    type?: CompensationEntryTypeEnum;
    unit?: CompensationEntryUnitEnum;
}
