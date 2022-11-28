import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GlobalPermissionPermissionEnum {
    PermissionUnspecified = "PERMISSION_UNSPECIFIED",
    CreateCourse = "CREATE_COURSE"
}


// GlobalPermission
/** 
 * Global user permission description.
**/
export class GlobalPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: GlobalPermissionPermissionEnum;
}
