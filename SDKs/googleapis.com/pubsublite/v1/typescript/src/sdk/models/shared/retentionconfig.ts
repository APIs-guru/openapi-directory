import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetentionConfig
/** 
 * The settings for a topic's message retention.
**/
export class RetentionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=perPartitionBytes" })
  perPartitionBytes?: string;

  @Metadata({ data: "json, name=period" })
  period?: string;
}
