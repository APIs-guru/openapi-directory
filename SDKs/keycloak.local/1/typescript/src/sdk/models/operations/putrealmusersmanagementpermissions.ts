import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmUsersManagementPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersManagementPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmUsersManagementPermissionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManagementPermissionReference;
}


export class PutRealmUsersManagementPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @SpeakeasyMetadata()
  statusCode: number;
}
