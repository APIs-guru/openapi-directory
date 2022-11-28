import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeQuestion
/** 
 * A time question.
**/
export class TimeQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: boolean;
}
