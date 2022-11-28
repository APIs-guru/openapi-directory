import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
import { Timestamp } from "./timestamp";
import { StackTrace } from "./stacktrace";
import { TestCaseReference } from "./testcasereference";
import { ToolOutputReference } from "./tooloutputreference";
export declare enum TestCaseStatusEnum {
    Passed = "passed",
    Failed = "failed",
    Error = "error",
    Skipped = "skipped",
    Flaky = "flaky"
}
export declare class TestCase extends SpeakeasyBase {
    elapsedTime?: Duration;
    endTime?: Timestamp;
    skippedMessage?: string;
    stackTraces?: StackTrace[];
    startTime?: Timestamp;
    status?: TestCaseStatusEnum;
    testCaseId?: string;
    testCaseReference?: TestCaseReference;
    toolOutputs?: ToolOutputReference[];
}
