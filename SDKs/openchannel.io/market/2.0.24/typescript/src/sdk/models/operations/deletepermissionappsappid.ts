import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePermissionAppsAppIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class DeletePermissionAppsAppIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class DeletePermissionAppsAppIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePermissionAppsAppIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeletePermissionAppsAppIdQueryParams;
}


export class DeletePermissionAppsAppIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
