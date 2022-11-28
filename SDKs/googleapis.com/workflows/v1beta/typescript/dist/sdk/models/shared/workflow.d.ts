import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WorkflowStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE"
}
/**
 * Workflow program to be executed by Workflows.
**/
export declare class Workflow extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    revisionCreateTime?: string;
    revisionId?: string;
    serviceAccount?: string;
    sourceContents?: string;
    state?: WorkflowStateEnum;
    updateTime?: string;
}
/**
 * Workflow program to be executed by Workflows.
**/
export declare class WorkflowInput extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    serviceAccount?: string;
    sourceContents?: string;
}
