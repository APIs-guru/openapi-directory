import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackendMetastore } from "./backendmetastore";

export enum FederationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Error = "ERROR"
}


// Federation
/** 
 * Represents a federation of multiple backend metastores.
**/
export class Federation extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendMetastores", elemType: shared.BackendMetastore })
  backendMetastores?: Map<string, BackendMetastore>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=endpointUri" })
  endpointUri?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: FederationStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
