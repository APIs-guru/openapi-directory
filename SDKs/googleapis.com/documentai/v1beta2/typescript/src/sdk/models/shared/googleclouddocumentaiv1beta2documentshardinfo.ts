import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2DocumentShardInfo
/** 
 * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
**/
export class GoogleCloudDocumentaiV1beta2DocumentShardInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shardCount" })
  shardCount?: string;

  @SpeakeasyMetadata({ data: "json, name=shardIndex" })
  shardIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=textOffset" })
  textOffset?: string;
}
