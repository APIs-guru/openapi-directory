import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestIamPermissionsRequest
/** 
 * Request message for `TestIamPermissions` method.
**/
export class TestIamPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
