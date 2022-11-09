import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3DocumentShardInfo
/** 
 * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
**/
export class GoogleCloudDocumentaiV1beta3DocumentShardInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=shardCount" })
  shardCount?: string;

  @Metadata({ data: "json, name=shardIndex" })
  shardIndex?: string;

  @Metadata({ data: "json, name=textOffset" })
  textOffset?: string;
}
