import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DateQuestion
/** 
 * A date question. Date questions default to just month + day.
**/
export class DateQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeTime" })
  includeTime?: boolean;

  @Metadata({ data: "json, name=includeYear" })
  includeYear?: boolean;
}
