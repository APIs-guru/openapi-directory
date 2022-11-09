import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1RenewalSettings } from "./googlecloudchannelv1renewalsettings";


// GoogleCloudChannelV1CommitmentSettings
/** 
 * Commitment settings for commitment-based offers.
**/
export class GoogleCloudChannelV1CommitmentSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=renewalSettings" })
  renewalSettings?: GoogleCloudChannelV1RenewalSettings;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
