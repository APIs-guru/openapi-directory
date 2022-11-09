import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPermissionAppsAppIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class GetPermissionAppsAppIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class GetPermissionAppsAppIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPermissionAppsAppIdPathParams;

  @Metadata()
  queryParams: GetPermissionAppsAppIdQueryParams;
}


export class GetPermissionAppsAppIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
