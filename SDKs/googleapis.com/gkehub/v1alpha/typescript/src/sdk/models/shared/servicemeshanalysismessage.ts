import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceMeshAnalysisMessageBase } from "./servicemeshanalysismessagebase";


// ServiceMeshAnalysisMessage
/** 
 * AnalysisMessage is a single message produced by an analyzer, and it used to communicate to the end user about the state of their Service Mesh configuration.
**/
export class ServiceMeshAnalysisMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=messageBase" })
  messageBase?: ServiceMeshAnalysisMessageBase;

  @Metadata({ data: "json, name=resourcePaths" })
  resourcePaths?: string[];
}
