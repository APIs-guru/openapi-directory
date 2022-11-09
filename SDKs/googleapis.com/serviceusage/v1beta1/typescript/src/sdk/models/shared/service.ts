import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceConfig } from "./serviceconfig";

export enum ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


// Service
/** 
 * A service that is available for use by the consumer.
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: ServiceConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=state" })
  state?: ServiceStateEnum;
}
