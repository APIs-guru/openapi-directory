import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
import { Timestamp } from "./timestamp";
import { StackTrace } from "./stacktrace";
import { TestCaseReference } from "./testcasereference";
import { ToolOutputReference } from "./tooloutputreference";


export enum TestCaseStatusEnum {
    Passed = "passed",
    Failed = "failed",
    Error = "error",
    Skipped = "skipped",
    Flaky = "flaky"
}


export class TestCase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elapsedTime" })
  elapsedTime?: Duration;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=skippedMessage" })
  skippedMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=stackTraces", elemType: StackTrace })
  stackTraces?: StackTrace[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TestCaseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=testCaseId" })
  testCaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=testCaseReference" })
  testCaseReference?: TestCaseReference;

  @SpeakeasyMetadata({ data: "json, name=toolOutputs", elemType: ToolOutputReference })
  toolOutputs?: ToolOutputReference[];
}
