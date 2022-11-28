import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorEvent } from "./errorevent";



// ListEventsResponse
/** 
 * Contains a set of requested error events.
**/
export class ListEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorEvents", elemType: ErrorEvent })
  errorEvents?: ErrorEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=timeRangeBegin" })
  timeRangeBegin?: string;
}
