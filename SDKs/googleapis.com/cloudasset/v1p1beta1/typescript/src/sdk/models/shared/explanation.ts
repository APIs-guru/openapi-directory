import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Permissions } from "./permissions";



// Explanation
/** 
 * Explanation about the IAM policy search result.
**/
export class Explanation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchedPermissions", elemType: Permissions })
  matchedPermissions?: Map<string, Permissions>;
}
