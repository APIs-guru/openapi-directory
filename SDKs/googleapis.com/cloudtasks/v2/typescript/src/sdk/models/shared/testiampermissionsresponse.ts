import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestIamPermissionsResponse
/** 
 * Response message for `TestIamPermissions` method.
**/
export class TestIamPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
