import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskExecutionSpec } from "./googleclouddataplexv1taskexecutionspec";
import { GoogleCloudDataplexV1TaskNotebookTaskConfig } from "./googleclouddataplexv1tasknotebooktaskconfig";
import { GoogleCloudDataplexV1TaskSparkTaskConfig } from "./googleclouddataplexv1tasksparktaskconfig";
import { GoogleCloudDataplexV1TaskTriggerSpec } from "./googleclouddataplexv1tasktriggerspec";
import { GoogleCloudDataplexV1TaskExecutionStatus } from "./googleclouddataplexv1taskexecutionstatus";
export declare enum GoogleCloudDataplexV1TaskStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * A task represents a user-visible job.
**/
export declare class GoogleCloudDataplexV1TaskInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;
    labels?: Map<string, string>;
    notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig;
    spark?: GoogleCloudDataplexV1TaskSparkTaskConfig;
    triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec;
}
/**
 * A task represents a user-visible job.
**/
export declare class GoogleCloudDataplexV1Task extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;
    executionStatus?: GoogleCloudDataplexV1TaskExecutionStatus;
    labels?: Map<string, string>;
    name?: string;
    notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig;
    spark?: GoogleCloudDataplexV1TaskSparkTaskConfig;
    state?: GoogleCloudDataplexV1TaskStateEnum;
    triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec;
    uid?: string;
    updateTime?: string;
}
