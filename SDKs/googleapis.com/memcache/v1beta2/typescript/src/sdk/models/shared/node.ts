import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemcacheParameters } from "./memcacheparameters";


export enum NodeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


export class Node extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: MemcacheParameters;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: NodeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateAvailable" })
  updateAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
