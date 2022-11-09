import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdpConfig
/** 
 * Template for a single idp configuration.
**/
export class IdpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=experimentPercent" })
  experimentPercent?: number;

  @Metadata({ data: "json, name=provider" })
  provider?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=whitelistedAudiences" })
  whitelistedAudiences?: string[];
}
