import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GlobalPermissionPermissionEnum {
    PermissionUnspecified = "PERMISSION_UNSPECIFIED"
,    CreateCourse = "CREATE_COURSE"
}


// GlobalPermission
/** 
 * Global user permission description.
**/
export class GlobalPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: GlobalPermissionPermissionEnum;
}
