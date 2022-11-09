import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MasterAuth } from "./masterauth";

export enum SetMasterAuthRequestActionEnum {
    Unknown = "UNKNOWN"
,    SetPassword = "SET_PASSWORD"
,    GeneratePassword = "GENERATE_PASSWORD"
,    SetUsername = "SET_USERNAME"
}


// SetMasterAuthRequest
/** 
 * SetMasterAuthRequest updates the admin password of a cluster.
**/
export class SetMasterAuthRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: SetMasterAuthRequestActionEnum;

  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=update" })
  update?: MasterAuth;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
