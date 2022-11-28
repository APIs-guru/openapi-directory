import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1MuteConfig } from "./googlecloudsecuritycenterv1muteconfig";
/**
 * Response message for listing mute configs.
**/
export declare class ListMuteConfigsResponse extends SpeakeasyBase {
    muteConfigs?: GoogleCloudSecuritycenterV1MuteConfig[];
    nextPageToken?: string;
}
