import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
import { FileReference } from "./filereference";
import { TestCaseReference } from "./testcasereference";



// ToolOutputReference
/** 
 * A reference to a ToolExecution output file.
**/
export class ToolOutputReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=testCase" })
  testCase?: TestCaseReference;
}
