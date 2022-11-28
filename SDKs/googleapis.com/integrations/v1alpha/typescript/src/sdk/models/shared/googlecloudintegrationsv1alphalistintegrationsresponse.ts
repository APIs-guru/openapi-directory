import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegration } from "./googlecloudintegrationsv1alphaintegration";



// GoogleCloudIntegrationsV1alphaListIntegrationsResponse
/** 
 * Response for ListIntegrations.
**/
export class GoogleCloudIntegrationsV1alphaListIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrations", elemType: GoogleCloudIntegrationsV1alphaIntegration })
  integrations?: GoogleCloudIntegrationsV1alphaIntegration[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
