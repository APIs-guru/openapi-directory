import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstantiateWorkflowTemplateRequest
/** 
 * A request to instantiate a workflow template.
**/
export class InstantiateWorkflowTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
