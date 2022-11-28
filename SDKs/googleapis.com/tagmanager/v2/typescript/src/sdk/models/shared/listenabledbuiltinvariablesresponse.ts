import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuiltInVariable } from "./builtinvariable";



// ListEnabledBuiltInVariablesResponse
/** 
 * A list of enabled built-in variables.
**/
export class ListEnabledBuiltInVariablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtInVariable", elemType: BuiltInVariable })
  builtInVariable?: BuiltInVariable[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
