import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalTestPermissionsResponse
/** 
 * Response message for `TestPermissions` method.
**/
export class SasPortalTestPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
