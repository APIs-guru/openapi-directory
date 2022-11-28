import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MeasurementConfig } from "./measurementconfig";



// PartnerAdServerConfig
/** 
 * Ad server related settings of a partner.
**/
export class PartnerAdServerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=measurementConfig" })
  measurementConfig?: MeasurementConfig;
}
