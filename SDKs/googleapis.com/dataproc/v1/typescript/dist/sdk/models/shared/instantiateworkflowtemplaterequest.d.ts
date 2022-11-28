import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to instantiate a workflow template.
**/
export declare class InstantiateWorkflowTemplateRequest extends SpeakeasyBase {
    parameters?: Map<string, string>;
    requestId?: string;
    version?: number;
}
