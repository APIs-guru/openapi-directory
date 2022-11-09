import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudSecuritycenterV1MuteConfig } from "./googlecloudsecuritycenterv1muteconfig";


// ListMuteConfigsResponse
/** 
 * Response message for listing mute configs.
**/
export class ListMuteConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=muteConfigs", elemType: shared.GoogleCloudSecuritycenterV1MuteConfig })
  muteConfigs?: GoogleCloudSecuritycenterV1MuteConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
