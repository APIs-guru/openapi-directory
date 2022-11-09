import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MeasurementConfig
/** 
 * Measurement settings of a partner.
**/
export class MeasurementConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dv360ToCmCostReportingEnabled" })
  dv360ToCmCostReportingEnabled?: boolean;

  @Metadata({ data: "json, name=dv360ToCmDataSharingEnabled" })
  dv360ToCmDataSharingEnabled?: boolean;
}
