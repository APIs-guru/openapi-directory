import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetReference } from "./targetreference";


// Copy
/** 
 * An object was created by copying an existing object.
**/
export class Copy extends SpeakeasyBase {
  @Metadata({ data: "json, name=originalObject" })
  originalObject?: TargetReference;
}
