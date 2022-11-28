import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JwksAlgoSettings
/** 
 * Settings for a JWK set
**/
export class JwksAlgoSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=kty" })
  kty?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
