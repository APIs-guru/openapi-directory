import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshAnalysisMessageBase } from "./servicemeshanalysismessagebase";
/**
 * AnalysisMessage is a single message produced by an analyzer, and it used to communicate to the end user about the state of their Service Mesh configuration.
**/
export declare class ServiceMeshAnalysisMessage extends SpeakeasyBase {
    args?: Map<string, any>;
    description?: string;
    messageBase?: ServiceMeshAnalysisMessageBase;
    resourcePaths?: string[];
}
