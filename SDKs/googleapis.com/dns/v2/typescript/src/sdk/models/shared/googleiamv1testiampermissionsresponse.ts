import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIamV1TestIamPermissionsResponse
/** 
 * Response message for `TestIamPermissions` method.
**/
export class GoogleIamV1TestIamPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
