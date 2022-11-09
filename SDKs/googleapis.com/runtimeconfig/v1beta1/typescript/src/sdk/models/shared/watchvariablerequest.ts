import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WatchVariableRequest
/** 
 * Request for the `WatchVariable()` method.
**/
export class WatchVariableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newerThan" })
  newerThan?: string;
}
