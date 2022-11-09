import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPermissionAppsAppIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class PostPermissionAppsAppIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostPermissionAppsAppIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPermissionAppsAppIdPathParams;

  @Metadata()
  queryParams: PostPermissionAppsAppIdQueryParams;
}


export class PostPermissionAppsAppIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
