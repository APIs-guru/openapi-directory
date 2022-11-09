import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * AnthosVMSubFeatureSpec contains the subfeature configuration for a membership/cluster.
**/
export declare class AnthosVmSubFeatureSpec extends SpeakeasyBase {
    enabled?: boolean;
    migrateSpec?: Map<string, any>;
    serviceMeshSpec?: Map<string, any>;
}
