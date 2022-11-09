import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestIamPermissionsResponse
/** 
 * A storage.(buckets|objects).testIamPermissions response.
**/
export class TestIamPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
