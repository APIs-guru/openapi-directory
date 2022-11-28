import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1MuteConfig } from "./googlecloudsecuritycenterv1muteconfig";



// ListMuteConfigsResponse
/** 
 * Response message for listing mute configs.
**/
export class ListMuteConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=muteConfigs", elemType: GoogleCloudSecuritycenterV1MuteConfig })
  muteConfigs?: GoogleCloudSecuritycenterV1MuteConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
