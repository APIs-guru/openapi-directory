import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatterPermission } from "./matterpermission";

export enum MatterStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Open = "OPEN"
,    Closed = "CLOSED"
,    Deleted = "DELETED"
}


// Matter
/** 
 * Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export class Matter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=matterId" })
  matterId?: string;

  @Metadata({ data: "json, name=matterPermissions", elemType: shared.MatterPermission })
  matterPermissions?: MatterPermission[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: MatterStateEnum;
}
