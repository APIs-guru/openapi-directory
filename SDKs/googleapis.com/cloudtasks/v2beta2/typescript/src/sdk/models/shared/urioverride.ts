import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UriOverrideSchemeEnum {
    SchemeUnspecified = "SCHEME_UNSPECIFIED",
    Http = "HTTP",
    Https = "HTTPS"
}

export enum UriOverrideUriOverrideEnforceModeEnum {
    UriOverrideEnforceModeUnspecified = "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED",
    IfNotExists = "IF_NOT_EXISTS",
    Always = "ALWAYS"
}


// UriOverride
/** 
 * Uri Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
**/
export class UriOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme?: UriOverrideSchemeEnum;

  @SpeakeasyMetadata({ data: "json, name=uriOverrideEnforceMode" })
  uriOverrideEnforceMode?: UriOverrideUriOverrideEnforceModeEnum;
}
