import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaJwt
/** 
 * Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected.
**/
export class GoogleCloudIntegrationsV1alphaJwt extends SpeakeasyBase {
  @Metadata({ data: "json, name=jwt" })
  jwt?: string;

  @Metadata({ data: "json, name=jwtHeader" })
  jwtHeader?: string;

  @Metadata({ data: "json, name=jwtPayload" })
  jwtPayload?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
