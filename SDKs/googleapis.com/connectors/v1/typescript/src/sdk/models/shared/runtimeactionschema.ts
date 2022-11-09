import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputParameter } from "./inputparameter";
import { ResultMetadata } from "./resultmetadata";


// RuntimeActionSchema
/** 
 * Schema of a runtime action.
**/
export class RuntimeActionSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=inputParameters", elemType: shared.InputParameter })
  inputParameters?: InputParameter[];

  @Metadata({ data: "json, name=resultMetadata", elemType: shared.ResultMetadata })
  resultMetadata?: ResultMetadata[];
}
