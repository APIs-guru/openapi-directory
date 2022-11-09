import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2IdpConfig } from "./googlecloudidentitytoolkitadminv2idpconfig";
import { GoogleCloudIdentitytoolkitAdminV2SpConfig } from "./googlecloudidentitytoolkitadminv2spconfig";


// GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig
/** 
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
**/
export class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=idpConfig" })
  idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=spConfig" })
  spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfig;
}
