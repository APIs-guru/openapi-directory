import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2IdpConfig } from "./googlecloudidentitytoolkitadminv2idpconfig";
import { GoogleCloudIdentitytoolkitAdminV2SpConfigInput } from "./googlecloudidentitytoolkitadminv2spconfig";
import { GoogleCloudIdentitytoolkitAdminV2SpConfig } from "./googlecloudidentitytoolkitadminv2spconfig";



// GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput
/** 
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
**/
export class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idpConfig" })
  idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=spConfig" })
  spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfigInput;
}


// GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig
/** 
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
**/
export class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idpConfig" })
  idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=spConfig" })
  spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfig;
}
