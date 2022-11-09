import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIamV1TestIamPermissionsResponse
/** 
 * Response message for `TestIamPermissions` method.
**/
export class GoogleIamV1TestIamPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
