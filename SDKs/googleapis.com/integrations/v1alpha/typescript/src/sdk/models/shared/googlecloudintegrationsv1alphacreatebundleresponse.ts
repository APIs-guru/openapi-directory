import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationBundleConfig } from "./googlecloudintegrationsv1alphaintegrationbundleconfig";


// GoogleCloudIntegrationsV1alphaCreateBundleResponse
/** 
 * Response for create bundle.
**/
export class GoogleCloudIntegrationsV1alphaCreateBundleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudIntegrationsV1alphaIntegrationBundleConfig;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
