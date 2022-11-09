import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmGroupsIdManagementPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsIdManagementPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmGroupsIdManagementPermissionsPathParams;
}


export class GetRealmGroupsIdManagementPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @Metadata()
  statusCode: number;
}
