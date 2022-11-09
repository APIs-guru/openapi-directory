import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosObservabilityFeatureSpec } from "./anthosobservabilityfeaturespec";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
/**
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export declare class CommonFeatureSpec extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityFeatureSpec;
    appdevexperience?: Map<string, any>;
    multiclusteringress?: MultiClusterIngressFeatureSpec;
}
