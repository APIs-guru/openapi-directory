import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersUserEmailPermissionsPermissionNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionName" })
  permissionName: shared.PermissionNameEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PostUsersUserEmailPermissionsPermissionNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersUserEmailPermissionsPermissionNamePathParams;
}


export class PostUsersUserEmailPermissionsPermissionNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userResponse?: shared.UserResponse;
}
