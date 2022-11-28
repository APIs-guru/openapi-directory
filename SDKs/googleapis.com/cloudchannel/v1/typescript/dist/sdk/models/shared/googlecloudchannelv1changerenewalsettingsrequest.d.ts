import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RenewalSettings } from "./googlecloudchannelv1renewalsettings";
/**
 * Request message for CloudChannelService.ChangeRenewalSettings.
**/
export declare class GoogleCloudChannelV1ChangeRenewalSettingsRequest extends SpeakeasyBase {
    renewalSettings?: GoogleCloudChannelV1RenewalSettings;
    requestId?: string;
}
