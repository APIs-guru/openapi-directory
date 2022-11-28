import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerInfo } from "./consumerinfo";



// CheckInfo
/** 
 * Contains additional information about the check operation.
**/
export class CheckInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerInfo" })
  consumerInfo?: ConsumerInfo;

  @SpeakeasyMetadata({ data: "json, name=unusedArguments" })
  unusedArguments?: string[];
}
