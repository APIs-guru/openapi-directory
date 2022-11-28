import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshAnalysisMessage } from "./servicemeshanalysismessage";
/**
 * **Service Mesh**: State for the whole Hub, as analyzed by the Service Mesh Hub Controller.
**/
export declare class ServiceMeshFeatureState extends SpeakeasyBase {
    analysisMessages?: ServiceMeshAnalysisMessage[];
}
