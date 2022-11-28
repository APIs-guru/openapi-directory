import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp
/** 
 * Standard Identity Toolkit-trusted IDPs.
**/
export class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=idpId" })
  idpId?: string;
}
