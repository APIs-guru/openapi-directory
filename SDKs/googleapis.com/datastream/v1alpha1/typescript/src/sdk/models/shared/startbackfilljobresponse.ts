import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamObject } from "./streamobject";



// StartBackfillJobResponse
/** 
 * Response for manually initiating a backfill job for a specific stream object.
**/
export class StartBackfillJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: StreamObject;
}
