import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MeasurementConfig
/** 
 * Measurement settings of a partner.
**/
export class MeasurementConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dv360ToCmCostReportingEnabled" })
  dv360ToCmCostReportingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dv360ToCmDataSharingEnabled" })
  dv360ToCmDataSharingEnabled?: boolean;
}
