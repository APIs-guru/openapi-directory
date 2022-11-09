import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JwtClaims
/** 
 * JWT claims used for the jwt-bearer authorization grant.
**/
export class JwtClaims extends SpeakeasyBase {
  @Metadata({ data: "json, name=audience" })
  audience?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
