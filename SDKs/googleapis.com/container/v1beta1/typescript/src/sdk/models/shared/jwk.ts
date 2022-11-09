import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Jwk
/** 
 * Jwk is a JSON Web Key as specified in RFC 7517
**/
export class Jwk extends SpeakeasyBase {
  @Metadata({ data: "json, name=alg" })
  alg?: string;

  @Metadata({ data: "json, name=crv" })
  crv?: string;

  @Metadata({ data: "json, name=e" })
  e?: string;

  @Metadata({ data: "json, name=kid" })
  kid?: string;

  @Metadata({ data: "json, name=kty" })
  kty?: string;

  @Metadata({ data: "json, name=n" })
  n?: string;

  @Metadata({ data: "json, name=use" })
  use?: string;

  @Metadata({ data: "json, name=x" })
  x?: string;

  @Metadata({ data: "json, name=y" })
  y?: string;
}
