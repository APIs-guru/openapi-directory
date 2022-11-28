import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Jwk
/** 
 * Jwk is a JSON Web Key as specified in RFC 7517
**/
export class Jwk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alg" })
  alg?: string;

  @SpeakeasyMetadata({ data: "json, name=crv" })
  crv?: string;

  @SpeakeasyMetadata({ data: "json, name=e" })
  e?: string;

  @SpeakeasyMetadata({ data: "json, name=kid" })
  kid?: string;

  @SpeakeasyMetadata({ data: "json, name=kty" })
  kty?: string;

  @SpeakeasyMetadata({ data: "json, name=n" })
  n?: string;

  @SpeakeasyMetadata({ data: "json, name=use" })
  use?: string;

  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: string;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: string;
}
