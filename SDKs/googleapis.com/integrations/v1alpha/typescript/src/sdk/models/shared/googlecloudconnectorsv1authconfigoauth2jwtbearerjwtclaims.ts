import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims
/** 
 * JWT claims used for the jwt-bearer authorization grant.
**/
export class GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
