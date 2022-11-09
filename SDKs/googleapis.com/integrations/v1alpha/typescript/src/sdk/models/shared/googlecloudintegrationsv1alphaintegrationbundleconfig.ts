import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaIntegrationBundleConfig
/** 
 * This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationBundleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=integrations" })
  integrations?: string[];

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
