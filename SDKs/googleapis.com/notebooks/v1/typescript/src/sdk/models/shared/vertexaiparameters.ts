import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VertexAiParameters
/** 
 * Parameters used in Vertex AI JobType executions.
**/
export class VertexAiParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=env" })
  env?: Map<string, string>;

  @Metadata({ data: "json, name=network" })
  network?: string;
}
