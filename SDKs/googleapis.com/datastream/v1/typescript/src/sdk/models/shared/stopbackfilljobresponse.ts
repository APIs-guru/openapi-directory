import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamObject } from "./streamobject";


// StopBackfillJobResponse
/** 
 * Response for manually stop a backfill job for a specific stream object.
**/
export class StopBackfillJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object?: StreamObject;
}
