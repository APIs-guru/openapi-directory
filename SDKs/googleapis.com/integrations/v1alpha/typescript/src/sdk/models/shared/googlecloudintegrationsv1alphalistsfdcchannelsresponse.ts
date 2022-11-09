import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaSfdcChannel } from "./googlecloudintegrationsv1alphasfdcchannel";


// GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse
/** 
 * Response to list SfdcChannels.
**/
export class GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sfdcChannels", elemType: shared.GoogleCloudIntegrationsV1alphaSfdcChannel })
  sfdcChannels?: GoogleCloudIntegrationsV1alphaSfdcChannel[];
}
