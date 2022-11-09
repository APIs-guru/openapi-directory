import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UriOverrideSchemeEnum {
    SchemeUnspecified = "SCHEME_UNSPECIFIED"
,    Http = "HTTP"
,    Https = "HTTPS"
}


// UriOverride
/** 
 * Uri Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
**/
export class UriOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=scheme" })
  scheme?: UriOverrideSchemeEnum;
}
