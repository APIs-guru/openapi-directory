import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeTarget
/** 
 * A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor.
**/
export class TimeTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;
}
