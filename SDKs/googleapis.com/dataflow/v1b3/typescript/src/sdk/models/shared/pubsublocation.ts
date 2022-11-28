import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PubsubLocation
/** 
 * Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.
**/
export class PubsubLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dropLateData" })
  dropLateData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idLabel" })
  idLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampLabel" })
  timestampLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingSubscription" })
  trackingSubscription?: string;

  @SpeakeasyMetadata({ data: "json, name=withAttributes" })
  withAttributes?: boolean;
}
