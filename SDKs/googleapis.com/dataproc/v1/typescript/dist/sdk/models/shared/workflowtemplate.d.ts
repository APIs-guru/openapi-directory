import { SpeakeasyBase } from "../../../internal/utils";
import { OrderedJob } from "./orderedjob";
import { TemplateParameter } from "./templateparameter";
import { WorkflowTemplatePlacementInput } from "./workflowtemplateplacement";
import { WorkflowTemplatePlacement } from "./workflowtemplateplacement";
/**
 * A Dataproc workflow template resource.
**/
export declare class WorkflowTemplateInput extends SpeakeasyBase {
    dagTimeout?: string;
    id?: string;
    jobs?: OrderedJob[];
    labels?: Map<string, string>;
    parameters?: TemplateParameter[];
    placement?: WorkflowTemplatePlacementInput;
    version?: number;
}
/**
 * A Dataproc workflow template resource.
**/
export declare class WorkflowTemplate extends SpeakeasyBase {
    createTime?: string;
    dagTimeout?: string;
    id?: string;
    jobs?: OrderedJob[];
    labels?: Map<string, string>;
    name?: string;
    parameters?: TemplateParameter[];
    placement?: WorkflowTemplatePlacement;
    updateTime?: string;
    version?: number;
}
