import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConditionValueRelativeDateEnum {
    RelativeDateUnspecified = "RELATIVE_DATE_UNSPECIFIED"
,    PastYear = "PAST_YEAR"
,    PastMonth = "PAST_MONTH"
,    PastWeek = "PAST_WEEK"
,    Yesterday = "YESTERDAY"
,    Today = "TODAY"
,    Tomorrow = "TOMORROW"
}


// ConditionValue
/** 
 * The value of the condition.
**/
export class ConditionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=relativeDate" })
  relativeDate?: ConditionValueRelativeDateEnum;

  @Metadata({ data: "json, name=userEnteredValue" })
  userEnteredValue?: string;
}
