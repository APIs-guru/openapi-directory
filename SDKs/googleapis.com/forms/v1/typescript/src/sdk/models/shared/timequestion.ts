import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeQuestion
/** 
 * A time question.
**/
export class TimeQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: boolean;
}
