import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputParameter } from "./inputparameter";
import { ResultMetadata } from "./resultmetadata";


// Action
/** 
 * Action message contains metadata information about a single action present in the external system.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputParameters", elemType: shared.InputParameter })
  inputParameters?: InputParameter[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resultMetadata", elemType: shared.ResultMetadata })
  resultMetadata?: ResultMetadata[];
}
