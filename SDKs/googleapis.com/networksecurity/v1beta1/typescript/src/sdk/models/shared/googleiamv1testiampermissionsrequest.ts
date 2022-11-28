import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIamV1TestIamPermissionsRequest
/** 
 * Request message for `TestIamPermissions` method.
**/
export class GoogleIamV1TestIamPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
