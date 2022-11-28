import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MasterAuth } from "./masterauth";


export enum SetMasterAuthRequestActionEnum {
    Unknown = "UNKNOWN",
    SetPassword = "SET_PASSWORD",
    GeneratePassword = "GENERATE_PASSWORD",
    SetUsername = "SET_USERNAME"
}


// SetMasterAuthRequest
/** 
 * SetMasterAuthRequest updates the admin password of a cluster.
**/
export class SetMasterAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: SetMasterAuthRequestActionEnum;

  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: MasterAuth;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
