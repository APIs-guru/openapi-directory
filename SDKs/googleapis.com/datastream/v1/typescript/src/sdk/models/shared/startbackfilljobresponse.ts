import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamObject } from "./streamobject";


// StartBackfillJobResponse
/** 
 * Response for manually initiating a backfill job for a specific stream object.
**/
export class StartBackfillJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object?: StreamObject;
}
