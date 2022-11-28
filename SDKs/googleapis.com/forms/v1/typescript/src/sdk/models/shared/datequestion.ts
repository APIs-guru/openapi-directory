import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateQuestion
/** 
 * A date question. Date questions default to just month + day.
**/
export class DateQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeTime" })
  includeTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeYear" })
  includeYear?: boolean;
}
