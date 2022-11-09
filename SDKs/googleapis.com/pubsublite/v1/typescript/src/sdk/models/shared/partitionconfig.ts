import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Capacity } from "./capacity";


// PartitionConfig
/** 
 * The settings for a topic's partitions.
**/
export class PartitionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacity" })
  capacity?: Capacity;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=scale" })
  scale?: number;
}
