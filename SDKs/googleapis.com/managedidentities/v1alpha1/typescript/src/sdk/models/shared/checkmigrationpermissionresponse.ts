import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnPremDomainSidDetails } from "./onpremdomainsiddetails";


export enum CheckMigrationPermissionResponseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    NeedsMaintenance = "NEEDS_MAINTENANCE"
}


// CheckMigrationPermissionResponse
/** 
 * CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method.
**/
export class CheckMigrationPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=onpremDomains", elemType: OnPremDomainSidDetails })
  onpremDomains?: OnPremDomainSidDetails[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CheckMigrationPermissionResponseStateEnum;
}
