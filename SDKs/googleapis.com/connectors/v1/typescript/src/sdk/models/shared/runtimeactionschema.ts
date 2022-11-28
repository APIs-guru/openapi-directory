import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputParameter } from "./inputparameter";
import { ResultMetadata } from "./resultmetadata";



// RuntimeActionSchema
/** 
 * Schema of a runtime action.
**/
export class RuntimeActionSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=inputParameters", elemType: InputParameter })
  inputParameters?: InputParameter[];

  @SpeakeasyMetadata({ data: "json, name=resultMetadata", elemType: ResultMetadata })
  resultMetadata?: ResultMetadata[];
}
