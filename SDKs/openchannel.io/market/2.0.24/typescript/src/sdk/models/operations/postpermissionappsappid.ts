import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPermissionAppsAppIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class PostPermissionAppsAppIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostPermissionAppsAppIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPermissionAppsAppIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostPermissionAppsAppIdQueryParams;
}


export class PostPermissionAppsAppIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
