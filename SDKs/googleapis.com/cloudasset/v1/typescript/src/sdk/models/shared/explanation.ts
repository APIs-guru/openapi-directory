import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Permissions } from "./permissions";


// Explanation
/** 
 * Explanation about the IAM policy search result.
**/
export class Explanation extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchedPermissions", elemType: shared.Permissions })
  matchedPermissions?: Map<string, Permissions>;
}
