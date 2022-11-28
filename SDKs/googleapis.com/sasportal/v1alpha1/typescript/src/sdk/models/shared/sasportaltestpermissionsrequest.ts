import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalTestPermissionsRequest
/** 
 * Request message for `TestPermissions` method.
**/
export class SasPortalTestPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
