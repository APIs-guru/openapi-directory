import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Timestamp } from "./timestamp";
import { FileReference } from "./filereference";
import { TestCaseReference } from "./testcasereference";


// ToolOutputReference
/** 
 * A reference to a ToolExecution output file.
**/
export class ToolOutputReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Timestamp;

  @Metadata({ data: "json, name=output" })
  output?: FileReference;

  @Metadata({ data: "json, name=testCase" })
  testCase?: TestCaseReference;
}
