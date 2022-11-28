import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppsAppIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class GetAppsAppIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackViews" })
  trackViews?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAppsAppIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAppsAppIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAppsAppIdQueryParams;
}


export class GetAppsAppIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
