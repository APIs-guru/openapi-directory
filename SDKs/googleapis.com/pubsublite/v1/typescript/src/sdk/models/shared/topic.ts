import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionConfig } from "./partitionconfig";
import { ReservationConfig } from "./reservationconfig";
import { RetentionConfig } from "./retentionconfig";



// Topic
/** 
 * Metadata about a topic resource.
**/
export class Topic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partitionConfig" })
  partitionConfig?: PartitionConfig;

  @SpeakeasyMetadata({ data: "json, name=reservationConfig" })
  reservationConfig?: ReservationConfig;

  @SpeakeasyMetadata({ data: "json, name=retentionConfig" })
  retentionConfig?: RetentionConfig;
}
