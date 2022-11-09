import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuiltInVariable } from "./builtinvariable";


// ListEnabledBuiltInVariablesResponse
/** 
 * A list of enabled built-in variables.
**/
export class ListEnabledBuiltInVariablesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=builtInVariable", elemType: shared.BuiltInVariable })
  builtInVariable?: BuiltInVariable[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
