import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsumerInfo } from "./consumerinfo";


// CheckInfo
/** 
 * Contains additional information about the check operation.
**/
export class CheckInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerInfo" })
  consumerInfo?: ConsumerInfo;

  @Metadata({ data: "json, name=unusedArguments" })
  unusedArguments?: string[];
}
