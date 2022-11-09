import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Duration } from "./duration";
import { Timestamp } from "./timestamp";
import { StackTrace } from "./stacktrace";
import { Timestamp } from "./timestamp";
import { TestCaseReference } from "./testcasereference";
import { ToolOutputReference } from "./tooloutputreference";

export enum TestCaseStatusEnum {
    Passed = "passed"
,    Failed = "failed"
,    Error = "error"
,    Skipped = "skipped"
,    Flaky = "flaky"
}


export class TestCase extends SpeakeasyBase {
  @Metadata({ data: "json, name=elapsedTime" })
  elapsedTime?: Duration;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Timestamp;

  @Metadata({ data: "json, name=skippedMessage" })
  skippedMessage?: string;

  @Metadata({ data: "json, name=stackTraces", elemType: shared.StackTrace })
  stackTraces?: StackTrace[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: Timestamp;

  @Metadata({ data: "json, name=status" })
  status?: TestCaseStatusEnum;

  @Metadata({ data: "json, name=testCaseId" })
  testCaseId?: string;

  @Metadata({ data: "json, name=testCaseReference" })
  testCaseReference?: TestCaseReference;

  @Metadata({ data: "json, name=toolOutputs", elemType: shared.ToolOutputReference })
  toolOutputs?: ToolOutputReference[];
}
