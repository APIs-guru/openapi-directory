import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RevertBuiltInVariableResponse
/** 
 * The result of reverting a built-in variable in a workspace.
**/
export class RevertBuiltInVariableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
