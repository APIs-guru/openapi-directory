import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PubsubLocation
/** 
 * Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.
**/
export class PubsubLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=dropLateData" })
  dropLateData?: boolean;

  @Metadata({ data: "json, name=idLabel" })
  idLabel?: string;

  @Metadata({ data: "json, name=subscription" })
  subscription?: string;

  @Metadata({ data: "json, name=timestampLabel" })
  timestampLabel?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;

  @Metadata({ data: "json, name=trackingSubscription" })
  trackingSubscription?: string;

  @Metadata({ data: "json, name=withAttributes" })
  withAttributes?: boolean;
}
