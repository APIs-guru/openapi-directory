import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RevertBuiltInVariableResponse
/** 
 * The result of reverting a built-in variable in a workspace.
**/
export class RevertBuiltInVariableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
