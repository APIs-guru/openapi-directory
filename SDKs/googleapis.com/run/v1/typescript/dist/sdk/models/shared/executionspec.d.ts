import { SpeakeasyBase } from "../../../internal/utils";
import { TaskTemplateSpec } from "./tasktemplatespec";
/**
 * ExecutionSpec describes how the execution will look.
**/
export declare class ExecutionSpec extends SpeakeasyBase {
    parallelism?: number;
    taskCount?: number;
    template?: TaskTemplateSpec;
}
