import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePermissionAppsAppIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class DeletePermissionAppsAppIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class DeletePermissionAppsAppIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePermissionAppsAppIdPathParams;

  @Metadata()
  queryParams: DeletePermissionAppsAppIdQueryParams;
}


export class DeletePermissionAppsAppIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
