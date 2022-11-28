import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppsBySafeNameSafeNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=safeName" })
  safeName: string;
}


export class GetAppsBySafeNameSafeNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackViews" })
  trackViews?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAppsBySafeNameSafeNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAppsBySafeNameSafeNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetAppsBySafeNameSafeNameQueryParams;
}


export class GetAppsBySafeNameSafeNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
