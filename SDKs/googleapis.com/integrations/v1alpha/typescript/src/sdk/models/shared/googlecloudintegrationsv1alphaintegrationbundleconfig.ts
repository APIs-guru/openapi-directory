import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput
/** 
 * This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrations" })
  integrations?: string[];
}


// GoogleCloudIntegrationsV1alphaIntegrationBundleConfig
/** 
 * This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationBundleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrations" })
  integrations?: string[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
