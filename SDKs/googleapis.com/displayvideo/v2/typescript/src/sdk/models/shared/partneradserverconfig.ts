import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeasurementConfig } from "./measurementconfig";


// PartnerAdServerConfig
/** 
 * Ad server related settings of a partner.
**/
export class PartnerAdServerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=measurementConfig" })
  measurementConfig?: MeasurementConfig;
}
