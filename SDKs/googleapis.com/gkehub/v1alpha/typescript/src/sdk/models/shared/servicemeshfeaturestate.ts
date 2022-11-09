import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceMeshAnalysisMessage } from "./servicemeshanalysismessage";


// ServiceMeshFeatureState
/** 
 * **Service Mesh**: State for the whole Hub, as analyzed by the Service Mesh Hub Controller.
**/
export class ServiceMeshFeatureState extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisMessages", elemType: shared.ServiceMeshAnalysisMessage })
  analysisMessages?: ServiceMeshAnalysisMessage[];
}
