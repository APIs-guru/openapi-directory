import { SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
import { FileReference } from "./filereference";
import { TestCaseReference } from "./testcasereference";
/**
 * A reference to a ToolExecution output file.
**/
export declare class ToolOutputReference extends SpeakeasyBase {
    creationTime?: Timestamp;
    output?: FileReference;
    testCase?: TestCaseReference;
}
