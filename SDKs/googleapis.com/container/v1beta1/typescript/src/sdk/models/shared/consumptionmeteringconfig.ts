import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConsumptionMeteringConfig
/** 
 * Parameters for controlling consumption metering.
**/
export class ConsumptionMeteringConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
