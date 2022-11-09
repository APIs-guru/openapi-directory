import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIamV1TestIamPermissionsRequest
/** 
 * Request message for TestIamPermissions method.
**/
export class GoogleIamV1TestIamPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
