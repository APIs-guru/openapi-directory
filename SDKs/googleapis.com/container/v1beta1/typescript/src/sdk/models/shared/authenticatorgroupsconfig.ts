import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthenticatorGroupsConfig
/** 
 * Configuration for returning group information from authenticators.
**/
export class AuthenticatorGroupsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=securityGroup" })
  securityGroup?: string;
}
