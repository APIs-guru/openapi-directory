import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestIamPermissionsResponse
/** 
 * A storage.(buckets|objects).testIamPermissions response.
**/
export class TestIamPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
