import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorEvent } from "./errorevent";


// ListEventsResponse
/** 
 * Contains a set of requested error events.
**/
export class ListEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorEvents", elemType: shared.ErrorEvent })
  errorEvents?: ErrorEvent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=timeRangeBegin" })
  timeRangeBegin?: string;
}
