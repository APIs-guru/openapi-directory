import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetentionConfig
/** 
 * The settings for a topic's message retention.
**/
export class RetentionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=perPartitionBytes" })
  perPartitionBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: string;
}
