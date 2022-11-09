import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppsAppIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class GetAppsAppIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=trackViews" })
  trackViews?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAppsAppIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAppsAppIdPathParams;

  @Metadata()
  queryParams: GetAppsAppIdQueryParams;
}


export class GetAppsAppIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
