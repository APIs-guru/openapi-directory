import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaJwt
/** 
 * Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected.
**/
export class GoogleCloudIntegrationsV1alphaJwt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jwt" })
  jwt?: string;

  @SpeakeasyMetadata({ data: "json, name=jwtHeader" })
  jwtHeader?: string;

  @SpeakeasyMetadata({ data: "json, name=jwtPayload" })
  jwtPayload?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
