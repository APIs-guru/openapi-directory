import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamObject } from "./streamobject";



// StopBackfillJobResponse
/** 
 * Response for manually stop a backfill job for a specific stream object.
**/
export class StopBackfillJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: StreamObject;
}
