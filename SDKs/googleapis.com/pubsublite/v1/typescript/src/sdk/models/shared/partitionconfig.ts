import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Capacity } from "./capacity";



// PartitionConfig
/** 
 * The settings for a topic's partitions.
**/
export class PartitionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity?: Capacity;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: number;
}
