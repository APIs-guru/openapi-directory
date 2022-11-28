import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPermissionAppsAppIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class GetPermissionAppsAppIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class GetPermissionAppsAppIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPermissionAppsAppIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPermissionAppsAppIdQueryParams;
}


export class GetPermissionAppsAppIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
