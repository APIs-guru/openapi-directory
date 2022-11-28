import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConditionValueRelativeDateEnum {
    RelativeDateUnspecified = "RELATIVE_DATE_UNSPECIFIED",
    PastYear = "PAST_YEAR",
    PastMonth = "PAST_MONTH",
    PastWeek = "PAST_WEEK",
    Yesterday = "YESTERDAY",
    Today = "TODAY",
    Tomorrow = "TOMORROW"
}
/**
 * The value of the condition.
**/
export declare class ConditionValue extends SpeakeasyBase {
    relativeDate?: ConditionValueRelativeDateEnum;
    userEnteredValue?: string;
}
