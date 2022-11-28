import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RenewalSettings } from "./googlecloudchannelv1renewalsettings";



// GoogleCloudChannelV1CommitmentSettings
/** 
 * Commitment settings for commitment-based offers.
**/
export class GoogleCloudChannelV1CommitmentSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=renewalSettings" })
  renewalSettings?: GoogleCloudChannelV1RenewalSettings;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


// GoogleCloudChannelV1CommitmentSettingsInput
/** 
 * Commitment settings for commitment-based offers.
**/
export class GoogleCloudChannelV1CommitmentSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=renewalSettings" })
  renewalSettings?: GoogleCloudChannelV1RenewalSettings;
}
