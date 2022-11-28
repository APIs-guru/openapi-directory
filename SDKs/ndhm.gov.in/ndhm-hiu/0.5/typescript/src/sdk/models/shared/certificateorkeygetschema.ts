import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateOrKeyGetSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alg" })
  alg?: string;

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

  @SpeakeasyMetadata({ data: "json, name=x5c" })
  x5c?: string[];

  @SpeakeasyMetadata({ data: "json, name=x5t" })
  x5t?: string;

  @SpeakeasyMetadata({ data: "json, name=x5t#S256" })
  x5tNumberS256?: string;
}
