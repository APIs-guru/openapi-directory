import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
**/
export declare class GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput extends SpeakeasyBase {
    integrations?: string[];
}
/**
 * This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
**/
export declare class GoogleCloudIntegrationsV1alphaIntegrationBundleConfig extends SpeakeasyBase {
    integrations?: string[];
    serviceAccount?: string;
}
