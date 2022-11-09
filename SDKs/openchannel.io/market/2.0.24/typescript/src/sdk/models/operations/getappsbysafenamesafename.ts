import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppsBySafeNameSafeNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=safeName" })
  safeName: string;
}


export class GetAppsBySafeNameSafeNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=trackViews" })
  trackViews?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAppsBySafeNameSafeNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAppsBySafeNameSafeNamePathParams;

  @Metadata()
  queryParams: GetAppsBySafeNameSafeNameQueryParams;
}


export class GetAppsBySafeNameSafeNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
