import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthenticatorGroupsConfig
/** 
 * Configuration for returning group information from authenticators.
**/
export class AuthenticatorGroupsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=securityGroup" })
  securityGroup?: string;
}
