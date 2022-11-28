import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationBundleConfig } from "./googlecloudintegrationsv1alphaintegrationbundleconfig";



// GoogleCloudIntegrationsV1alphaCreateBundleResponse
/** 
 * Response for create bundle.
**/
export class GoogleCloudIntegrationsV1alphaCreateBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudIntegrationsV1alphaIntegrationBundleConfig;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
