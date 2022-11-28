import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput } from "./googlecloudintegrationsv1alphaintegrationbundleconfig";



// GoogleCloudIntegrationsV1alphaUpdateBundleRequestInput
/** 
 * THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Request message for Bundle update
**/
export class GoogleCloudIntegrationsV1alphaUpdateBundleRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput;
}
