import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSfdcChannel } from "./googlecloudintegrationsv1alphasfdcchannel";



// GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse
/** 
 * Response to list SfdcChannels.
**/
export class GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sfdcChannels", elemType: GoogleCloudIntegrationsV1alphaSfdcChannel })
  sfdcChannels?: GoogleCloudIntegrationsV1alphaSfdcChannel[];
}
