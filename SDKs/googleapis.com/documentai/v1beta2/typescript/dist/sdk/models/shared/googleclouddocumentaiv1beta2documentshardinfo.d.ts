import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentShardInfo extends SpeakeasyBase {
    shardCount?: string;
    shardIndex?: string;
    textOffset?: string;
}
