import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalTestPermissionsResponse
/** 
 * Response message for `TestPermissions` method.
**/
export class SasPortalTestPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
