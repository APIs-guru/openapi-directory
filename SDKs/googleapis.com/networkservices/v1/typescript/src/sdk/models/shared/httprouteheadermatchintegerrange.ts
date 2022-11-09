import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteHeaderMatchIntegerRange
/** 
 * Represents an integer value range.
**/
export class HttpRouteHeaderMatchIntegerRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
