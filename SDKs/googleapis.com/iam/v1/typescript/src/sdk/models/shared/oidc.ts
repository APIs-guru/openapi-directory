import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Oidc
/** 
 * Represents an OpenId Connect 1.0 identity provider.
**/
export class Oidc extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedAudiences" })
  allowedAudiences?: string[];

  @Metadata({ data: "json, name=issuerUri" })
  issuerUri?: string;
}
