import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskCompletionStatusEnum } from "./taskcompletionstatusenum";


// TaskResult
/** 
 * Class TaskExecutionInfo.
**/
export class TaskResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTimeUtc" })
  endTimeUtc?: Date;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=LongErrorMessage" })
  longErrorMessage?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=StartTimeUtc" })
  startTimeUtc?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: TaskCompletionStatusEnum;
}
