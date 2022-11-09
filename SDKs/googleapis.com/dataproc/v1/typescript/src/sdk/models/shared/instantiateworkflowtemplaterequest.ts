import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstantiateWorkflowTemplateRequest
/** 
 * A request to instantiate a workflow template.
**/
export class InstantiateWorkflowTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
