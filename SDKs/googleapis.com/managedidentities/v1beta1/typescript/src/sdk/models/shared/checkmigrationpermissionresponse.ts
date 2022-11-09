import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OnPremDomainSidDetails } from "./onpremdomainsiddetails";

export enum CheckMigrationPermissionResponseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
,    NeedsMaintenance = "NEEDS_MAINTENANCE"
}


// CheckMigrationPermissionResponse
/** 
 * CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method.
**/
export class CheckMigrationPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=onpremDomains", elemType: shared.OnPremDomainSidDetails })
  onpremDomains?: OnPremDomainSidDetails[];

  @Metadata({ data: "json, name=state" })
  state?: CheckMigrationPermissionResponseStateEnum;
}
