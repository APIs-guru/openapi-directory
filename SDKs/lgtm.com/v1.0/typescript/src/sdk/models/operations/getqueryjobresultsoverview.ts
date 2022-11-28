import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryJobResultsOverviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryjob-id" })
  queryjobId: string;
}


export class GetQueryJobResultsOverviewQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}


export class GetQueryJobResultsOverviewSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetQueryJobResultsOverviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueryJobResultsOverviewPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueryJobResultsOverviewQueryParams;

  @SpeakeasyMetadata()
  security: GetQueryJobResultsOverviewSecurity;
}


export class GetQueryJobResultsOverviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  queryjobResultsOverview?: shared.QueryjobResultsOverview;
}
