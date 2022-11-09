import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JwksAlgoSettings
/** 
 * Settings for a JWK set
**/
export class JwksAlgoSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=kty" })
  kty?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
