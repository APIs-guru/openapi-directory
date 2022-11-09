import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HttpConfigHttpEnabledStateEnum {
    HttpStateUnspecified = "HTTP_STATE_UNSPECIFIED"
,    HttpEnabled = "HTTP_ENABLED"
,    HttpDisabled = "HTTP_DISABLED"
}


// HttpConfig
/** 
 * The configuration of the HTTP bridge for a device registry.
**/
export class HttpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpEnabledState" })
  httpEnabledState?: HttpConfigHttpEnabledStateEnum;
}
