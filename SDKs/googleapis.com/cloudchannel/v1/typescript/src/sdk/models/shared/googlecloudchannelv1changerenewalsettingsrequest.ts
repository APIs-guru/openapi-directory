import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1RenewalSettings } from "./googlecloudchannelv1renewalsettings";


// GoogleCloudChannelV1ChangeRenewalSettingsRequest
/** 
 * Request message for CloudChannelService.ChangeRenewalSettings.
**/
export class GoogleCloudChannelV1ChangeRenewalSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=renewalSettings" })
  renewalSettings?: GoogleCloudChannelV1RenewalSettings;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
