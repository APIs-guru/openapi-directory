import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceConfig } from "./serviceconfig";


export enum ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}


// Service
/** 
 * A service that is available for use by the consumer.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ServiceConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ServiceStateEnum;
}
