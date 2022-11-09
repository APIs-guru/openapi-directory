import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderedJob } from "./orderedjob";
import { TemplateParameter } from "./templateparameter";
import { WorkflowTemplatePlacement } from "./workflowtemplateplacement";


// WorkflowTemplate
/** 
 * A Dataproc workflow template resource.
**/
export class WorkflowTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dagTimeout" })
  dagTimeout?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jobs", elemType: shared.OrderedJob })
  jobs?: OrderedJob[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.TemplateParameter })
  parameters?: TemplateParameter[];

  @Metadata({ data: "json, name=placement" })
  placement?: WorkflowTemplatePlacement;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
