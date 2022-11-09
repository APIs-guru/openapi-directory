import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersUserEmailPermissionsPermissionNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=permissionName" })
  permissionName: shared.PermissionNameEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PostUsersUserEmailPermissionsPermissionNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersUserEmailPermissionsPermissionNamePathParams;
}


export class PostUsersUserEmailPermissionsPermissionNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  userResponse?: shared.UserResponse;
}
