import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig
/** 
 * Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness.
**/
export class GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableImprovedEmailPrivacy" })
  enableImprovedEmailPrivacy?: boolean;
}
