import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskCompletionStatusEnum } from "./taskcompletionstatusenum";



// TaskResult
/** 
 * Class TaskExecutionInfo.
**/
export class TaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTimeUtc" })
  endTimeUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=LongErrorMessage" })
  longErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTimeUtc" })
  startTimeUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TaskCompletionStatusEnum;
}
