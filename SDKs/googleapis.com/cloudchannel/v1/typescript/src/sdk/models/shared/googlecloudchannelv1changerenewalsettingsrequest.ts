import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RenewalSettings } from "./googlecloudchannelv1renewalsettings";



// GoogleCloudChannelV1ChangeRenewalSettingsRequest
/** 
 * Request message for CloudChannelService.ChangeRenewalSettings.
**/
export class GoogleCloudChannelV1ChangeRenewalSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=renewalSettings" })
  renewalSettings?: GoogleCloudChannelV1RenewalSettings;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
