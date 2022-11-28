import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountAccessPermissionEnum {
    Read = "read",
    Edit = "edit",
    Publish = "publish",
    Delete = "delete",
    Manage = "manage",
    EditWorkspace = "editWorkspace"
}


// AccountAccess
/** 
 * Defines the Google Tag Manager Account access permissions.
**/
export class AccountAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: AccountAccessPermissionEnum[];
}
