import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdpConfig
/** 
 * Template for a single idp configuration.
**/
export class IdpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=experimentPercent" })
  experimentPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=whitelistedAudiences" })
  whitelistedAudiences?: string[];
}
