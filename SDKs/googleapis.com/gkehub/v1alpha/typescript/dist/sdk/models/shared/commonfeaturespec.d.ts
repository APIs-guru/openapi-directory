import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityFeatureSpec } from "./anthosobservabilityfeaturespec";
import { CloudAuditLoggingFeatureSpec } from "./cloudauditloggingfeaturespec";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
import { FeatureSpec } from "./featurespec";
/**
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export declare class CommonFeatureSpec extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityFeatureSpec;
    appdevexperience?: Map<string, any>;
    cloudauditlogging?: CloudAuditLoggingFeatureSpec;
    fleetobservability?: Map<string, any>;
    multiclusteringress?: MultiClusterIngressFeatureSpec;
    workloadcertificate?: FeatureSpec;
}
