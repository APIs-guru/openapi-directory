import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetReference } from "./targetreference";



// Copy
/** 
 * An object was created by copying an existing object.
**/
export class Copy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=originalObject" })
  originalObject?: TargetReference;
}
