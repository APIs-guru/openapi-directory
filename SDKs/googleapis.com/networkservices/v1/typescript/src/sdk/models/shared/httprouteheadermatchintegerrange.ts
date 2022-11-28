import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteHeaderMatchIntegerRange
/** 
 * Represents an integer value range.
**/
export class HttpRouteHeaderMatchIntegerRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
