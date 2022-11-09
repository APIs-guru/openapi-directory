import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1TaskExecutionSpec } from "./googleclouddataplexv1taskexecutionspec";
import { GoogleCloudDataplexV1TaskExecutionStatus } from "./googleclouddataplexv1taskexecutionstatus";
import { GoogleCloudDataplexV1TaskNotebookTaskConfig } from "./googleclouddataplexv1tasknotebooktaskconfig";
import { GoogleCloudDataplexV1TaskSparkTaskConfig } from "./googleclouddataplexv1tasksparktaskconfig";
import { GoogleCloudDataplexV1TaskTriggerSpec } from "./googleclouddataplexv1tasktriggerspec";

export enum GoogleCloudDataplexV1TaskStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Creating = "CREATING"
,    Deleting = "DELETING"
,    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1Task
/** 
 * A task represents a user-visible job.
**/
export class GoogleCloudDataplexV1Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=executionSpec" })
  executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;

  @Metadata({ data: "json, name=executionStatus" })
  executionStatus?: GoogleCloudDataplexV1TaskExecutionStatus;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notebook" })
  notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig;

  @Metadata({ data: "json, name=spark" })
  spark?: GoogleCloudDataplexV1TaskSparkTaskConfig;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1TaskStateEnum;

  @Metadata({ data: "json, name=triggerSpec" })
  triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
