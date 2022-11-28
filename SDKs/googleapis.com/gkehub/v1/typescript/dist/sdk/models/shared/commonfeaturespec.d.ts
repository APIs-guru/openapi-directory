import { SpeakeasyBase } from "../../../internal/utils";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
/**
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export declare class CommonFeatureSpec extends SpeakeasyBase {
    appdevexperience?: Map<string, any>;
    fleetobservability?: Map<string, any>;
    multiclusteringress?: MultiClusterIngressFeatureSpec;
}
