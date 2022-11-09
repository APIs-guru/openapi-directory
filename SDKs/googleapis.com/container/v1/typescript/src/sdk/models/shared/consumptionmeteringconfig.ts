import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConsumptionMeteringConfig
/** 
 * Parameters for controlling consumption metering.
**/
export class ConsumptionMeteringConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
