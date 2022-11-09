import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Capacity
/** 
 * The throughput capacity configuration for each partition.
**/
export class Capacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=publishMibPerSec" })
  publishMibPerSec?: number;

  @Metadata({ data: "json, name=subscribeMibPerSec" })
  subscribeMibPerSec?: number;
}
