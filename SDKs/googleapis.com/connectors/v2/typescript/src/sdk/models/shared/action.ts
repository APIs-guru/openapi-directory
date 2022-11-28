import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputParameter } from "./inputparameter";
import { ResultMetadata } from "./resultmetadata";



// Action
/** 
 * Action message contains metadata information about a single action present in the external system.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputParameters", elemType: InputParameter })
  inputParameters?: InputParameter[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resultMetadata", elemType: ResultMetadata })
  resultMetadata?: ResultMetadata[];
}
