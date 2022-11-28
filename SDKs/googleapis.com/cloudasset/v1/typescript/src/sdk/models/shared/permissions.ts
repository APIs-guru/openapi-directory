import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Permissions
/** 
 * IAM permissions
**/
export class Permissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
