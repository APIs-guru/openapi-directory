import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PubSubIoDetails
/** 
 * Metadata for a Pub/Sub connector used by the job.
**/
export class PubSubIoDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=subscription" })
  subscription?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
