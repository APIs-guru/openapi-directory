import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderedJob } from "./orderedjob";
import { TemplateParameter } from "./templateparameter";
import { WorkflowTemplatePlacementInput } from "./workflowtemplateplacement";
import { WorkflowTemplatePlacement } from "./workflowtemplateplacement";



// WorkflowTemplateInput
/** 
 * A Dataproc workflow template resource.
**/
export class WorkflowTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dagTimeout" })
  dagTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: OrderedJob })
  jobs?: OrderedJob[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: TemplateParameter })
  parameters?: TemplateParameter[];

  @SpeakeasyMetadata({ data: "json, name=placement" })
  placement?: WorkflowTemplatePlacementInput;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}


// WorkflowTemplate
/** 
 * A Dataproc workflow template resource.
**/
export class WorkflowTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dagTimeout" })
  dagTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: OrderedJob })
  jobs?: OrderedJob[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: TemplateParameter })
  parameters?: TemplateParameter[];

  @SpeakeasyMetadata({ data: "json, name=placement" })
  placement?: WorkflowTemplatePlacement;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
