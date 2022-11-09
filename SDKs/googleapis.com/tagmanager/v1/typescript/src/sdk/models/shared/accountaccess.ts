import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountAccessPermissionEnum {
    Read = "read"
,    Edit = "edit"
,    Publish = "publish"
,    Delete = "delete"
,    Manage = "manage"
,    EditWorkspace = "editWorkspace"
}


// AccountAccess
/** 
 * Defines the Google Tag Manager Account access permissions.
**/
export class AccountAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: AccountAccessPermissionEnum[];
}
