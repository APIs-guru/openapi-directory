import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiServiceusageV1ServiceConfig } from "./googleapiserviceusagev1serviceconfig";


export enum GoogleApiServiceusageV1ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}


// GoogleApiServiceusageV1Service
/** 
 * A service that is available for use by the consumer.
**/
export class GoogleApiServiceusageV1Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleApiServiceusageV1ServiceConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleApiServiceusageV1ServiceStateEnum;
}
