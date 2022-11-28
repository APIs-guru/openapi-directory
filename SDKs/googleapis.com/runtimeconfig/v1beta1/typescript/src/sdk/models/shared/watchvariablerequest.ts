import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WatchVariableRequest
/** 
 * Request for the `WatchVariable()` method.
**/
export class WatchVariableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newerThan" })
  newerThan?: string;
}
