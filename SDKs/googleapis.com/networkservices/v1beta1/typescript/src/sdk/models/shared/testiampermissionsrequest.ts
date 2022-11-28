import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestIamPermissionsRequest
/** 
 * Request message for `TestIamPermissions` method.
**/
export class TestIamPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
