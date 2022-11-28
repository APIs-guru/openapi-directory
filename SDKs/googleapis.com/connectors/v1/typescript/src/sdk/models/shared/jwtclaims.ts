import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JwtClaims
/** 
 * JWT claims used for the jwt-bearer authorization grant.
**/
export class JwtClaims extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
