import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HttpConfigHttpEnabledStateEnum {
    HttpStateUnspecified = "HTTP_STATE_UNSPECIFIED",
    HttpEnabled = "HTTP_ENABLED",
    HttpDisabled = "HTTP_DISABLED"
}


// HttpConfig
/** 
 * The configuration of the HTTP bridge for a device registry.
**/
export class HttpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpEnabledState" })
  httpEnabledState?: HttpConfigHttpEnabledStateEnum;
}
