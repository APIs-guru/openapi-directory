import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ReportValue } from "./googlecloudchannelv1reportvalue";



// GoogleCloudChannelV1Row
/** 
 * A row of report values.
**/
export class GoogleCloudChannelV1Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: GoogleCloudChannelV1ReportValue })
  values?: GoogleCloudChannelV1ReportValue[];
}
