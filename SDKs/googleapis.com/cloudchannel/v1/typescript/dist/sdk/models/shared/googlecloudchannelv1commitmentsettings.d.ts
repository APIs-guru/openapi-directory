import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RenewalSettings } from "./googlecloudchannelv1renewalsettings";
/**
 * Commitment settings for commitment-based offers.
**/
export declare class GoogleCloudChannelV1CommitmentSettings extends SpeakeasyBase {
    endTime?: string;
    renewalSettings?: GoogleCloudChannelV1RenewalSettings;
    startTime?: string;
}
/**
 * Commitment settings for commitment-based offers.
**/
export declare class GoogleCloudChannelV1CommitmentSettingsInput extends SpeakeasyBase {
    renewalSettings?: GoogleCloudChannelV1RenewalSettings;
}
