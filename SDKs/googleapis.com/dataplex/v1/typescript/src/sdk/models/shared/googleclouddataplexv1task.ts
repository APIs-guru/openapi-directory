import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskExecutionSpec } from "./googleclouddataplexv1taskexecutionspec";
import { GoogleCloudDataplexV1TaskNotebookTaskConfig } from "./googleclouddataplexv1tasknotebooktaskconfig";
import { GoogleCloudDataplexV1TaskSparkTaskConfig } from "./googleclouddataplexv1tasksparktaskconfig";
import { GoogleCloudDataplexV1TaskTriggerSpec } from "./googleclouddataplexv1tasktriggerspec";
import { GoogleCloudDataplexV1TaskExecutionStatus } from "./googleclouddataplexv1taskexecutionstatus";


export enum GoogleCloudDataplexV1TaskStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1TaskInput
/** 
 * A task represents a user-visible job.
**/
export class GoogleCloudDataplexV1TaskInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=executionSpec" })
  executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=notebook" })
  notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig;

  @SpeakeasyMetadata({ data: "json, name=spark" })
  spark?: GoogleCloudDataplexV1TaskSparkTaskConfig;

  @SpeakeasyMetadata({ data: "json, name=triggerSpec" })
  triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec;
}


// GoogleCloudDataplexV1Task
/** 
 * A task represents a user-visible job.
**/
export class GoogleCloudDataplexV1Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=executionSpec" })
  executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;

  @SpeakeasyMetadata({ data: "json, name=executionStatus" })
  executionStatus?: GoogleCloudDataplexV1TaskExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notebook" })
  notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig;

  @SpeakeasyMetadata({ data: "json, name=spark" })
  spark?: GoogleCloudDataplexV1TaskSparkTaskConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1TaskStateEnum;

  @SpeakeasyMetadata({ data: "json, name=triggerSpec" })
  triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
