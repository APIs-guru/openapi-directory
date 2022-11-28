import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConditionValueRelativeDateEnum {
    RelativeDateUnspecified = "RELATIVE_DATE_UNSPECIFIED",
    PastYear = "PAST_YEAR",
    PastMonth = "PAST_MONTH",
    PastWeek = "PAST_WEEK",
    Yesterday = "YESTERDAY",
    Today = "TODAY",
    Tomorrow = "TOMORROW"
}


// ConditionValue
/** 
 * The value of the condition.
**/
export class ConditionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relativeDate" })
  relativeDate?: ConditionValueRelativeDateEnum;

  @SpeakeasyMetadata({ data: "json, name=userEnteredValue" })
  userEnteredValue?: string;
}
