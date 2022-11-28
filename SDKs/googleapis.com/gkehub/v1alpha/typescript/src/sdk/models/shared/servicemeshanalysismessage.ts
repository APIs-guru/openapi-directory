import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshAnalysisMessageBase } from "./servicemeshanalysismessagebase";



// ServiceMeshAnalysisMessage
/** 
 * AnalysisMessage is a single message produced by an analyzer, and it used to communicate to the end user about the state of their Service Mesh configuration.
**/
export class ServiceMeshAnalysisMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=messageBase" })
  messageBase?: ServiceMeshAnalysisMessageBase;

  @SpeakeasyMetadata({ data: "json, name=resourcePaths" })
  resourcePaths?: string[];
}
