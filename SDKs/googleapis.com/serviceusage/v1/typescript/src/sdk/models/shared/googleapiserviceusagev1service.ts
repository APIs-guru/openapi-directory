import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleApiServiceusageV1ServiceConfig } from "./googleapiserviceusagev1serviceconfig";

export enum GoogleApiServiceusageV1ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


// GoogleApiServiceusageV1Service
/** 
 * A service that is available for use by the consumer.
**/
export class GoogleApiServiceusageV1Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GoogleApiServiceusageV1ServiceConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleApiServiceusageV1ServiceStateEnum;
}
