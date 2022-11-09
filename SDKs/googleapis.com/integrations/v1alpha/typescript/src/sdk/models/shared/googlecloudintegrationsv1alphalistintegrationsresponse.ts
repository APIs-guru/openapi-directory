import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaIntegration } from "./googlecloudintegrationsv1alphaintegration";


// GoogleCloudIntegrationsV1alphaListIntegrationsResponse
/** 
 * Response for ListIntegrations.
**/
export class GoogleCloudIntegrationsV1alphaListIntegrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=integrations", elemType: shared.GoogleCloudIntegrationsV1alphaIntegration })
  integrations?: GoogleCloudIntegrationsV1alphaIntegration[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
