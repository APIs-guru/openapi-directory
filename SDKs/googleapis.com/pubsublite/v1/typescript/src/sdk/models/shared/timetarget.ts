import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeTarget
/** 
 * A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor.
**/
export class TimeTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;
}
