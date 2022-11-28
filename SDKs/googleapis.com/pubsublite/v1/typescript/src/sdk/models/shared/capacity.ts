import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Capacity
/** 
 * The throughput capacity configuration for each partition.
**/
export class Capacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publishMibPerSec" })
  publishMibPerSec?: number;

  @SpeakeasyMetadata({ data: "json, name=subscribeMibPerSec" })
  subscribeMibPerSec?: number;
}
