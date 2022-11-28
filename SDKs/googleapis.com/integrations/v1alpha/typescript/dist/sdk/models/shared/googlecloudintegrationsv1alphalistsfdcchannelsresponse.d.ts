import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSfdcChannel } from "./googlecloudintegrationsv1alphasfdcchannel";
/**
 * Response to list SfdcChannels.
**/
export declare class GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sfdcChannels?: GoogleCloudIntegrationsV1alphaSfdcChannel[];
}
