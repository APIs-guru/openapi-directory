import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshAnalysisMessage } from "./servicemeshanalysismessage";



// ServiceMeshFeatureState
/** 
 * **Service Mesh**: State for the whole Hub, as analyzed by the Service Mesh Hub Controller.
**/
export class ServiceMeshFeatureState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisMessages", elemType: ServiceMeshAnalysisMessage })
  analysisMessages?: ServiceMeshAnalysisMessage[];
}
