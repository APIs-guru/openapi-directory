import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PartitionConfig } from "./partitionconfig";
import { ReservationConfig } from "./reservationconfig";
import { RetentionConfig } from "./retentionconfig";


// Topic
/** 
 * Metadata about a topic resource.
**/
export class Topic extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=partitionConfig" })
  partitionConfig?: PartitionConfig;

  @Metadata({ data: "json, name=reservationConfig" })
  reservationConfig?: ReservationConfig;

  @Metadata({ data: "json, name=retentionConfig" })
  retentionConfig?: RetentionConfig;
}
