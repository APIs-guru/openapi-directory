import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Oidc
/** 
 * Represents an OpenId Connect 1.0 identity provider.
**/
export class Oidc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedAudiences" })
  allowedAudiences?: string[];

  @SpeakeasyMetadata({ data: "json, name=issuerUri" })
  issuerUri?: string;
}
