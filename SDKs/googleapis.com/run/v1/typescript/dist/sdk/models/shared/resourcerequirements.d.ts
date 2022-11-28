import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ResourceRequirements describes the compute resource requirements.
**/
export declare class ResourceRequirements extends SpeakeasyBase {
    limits?: Map<string, string>;
    requests?: Map<string, string>;
}
