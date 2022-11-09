import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalTestPermissionsRequest
/** 
 * Request message for `TestPermissions` method.
**/
export class SasPortalTestPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}
