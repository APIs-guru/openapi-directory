import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CertificateOrKeyGetSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=alg" })
  alg?: string;

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

  @Metadata({ data: "json, name=x5c" })
  x5c?: string[];

  @Metadata({ data: "json, name=x5t" })
  x5t?: string;

  @Metadata({ data: "json, name=x5t#S256" })
  x5tNumberS256?: string;
}
