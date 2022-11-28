import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendMetastore } from "./backendmetastore";


export enum FederationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Error = "ERROR"
}


// FederationInput
/** 
 * Represents a federation of multiple backend metastores.
**/
export class FederationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendMetastores", elemType: BackendMetastore })
  backendMetastores?: Map<string, BackendMetastore>;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// Federation
/** 
 * Represents a federation of multiple backend metastores.
**/
export class Federation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendMetastores", elemType: BackendMetastore })
  backendMetastores?: Map<string, BackendMetastore>;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointUri" })
  endpointUri?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FederationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
