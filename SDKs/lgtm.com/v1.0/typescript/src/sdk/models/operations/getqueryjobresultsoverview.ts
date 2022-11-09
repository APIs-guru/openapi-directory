import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryJobResultsOverviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=queryjob-id" })
  queryjobId: string;
}


export class GetQueryJobResultsOverviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}


export class GetQueryJobResultsOverviewSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetQueryJobResultsOverviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueryJobResultsOverviewPathParams;

  @Metadata()
  queryParams: GetQueryJobResultsOverviewQueryParams;

  @Metadata()
  security: GetQueryJobResultsOverviewSecurity;
}


export class GetQueryJobResultsOverviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  queryjobResultsOverview?: shared.QueryjobResultsOverview;
}
