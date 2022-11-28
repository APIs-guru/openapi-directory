import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PubSubIoDetails
/** 
 * Metadata for a Pub/Sub connector used by the job.
**/
export class PubSubIoDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
