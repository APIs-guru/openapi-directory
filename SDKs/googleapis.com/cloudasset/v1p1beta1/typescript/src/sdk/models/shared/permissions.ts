import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Permissions
/** 
 * IAM permissions.
**/
export class Permissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
