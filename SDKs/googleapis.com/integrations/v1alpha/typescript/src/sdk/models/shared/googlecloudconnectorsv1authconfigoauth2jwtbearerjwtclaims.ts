import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims
/** 
 * JWT claims used for the jwt-bearer authorization grant.
**/
export class GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims extends SpeakeasyBase {
  @Metadata({ data: "json, name=audience" })
  audience?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
