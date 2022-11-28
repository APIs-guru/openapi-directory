import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1TrialSettings
/** 
 * Settings for trial offers.
**/
export class GoogleCloudChannelV1TrialSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=trial" })
  trial?: boolean;
}
