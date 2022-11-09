import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryJobResultsForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=queryjob-id" })
  queryjobId: string;
}


export class GetQueryJobResultsForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nofilter" })
  nofilter?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetQueryJobResultsForProjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetQueryJobResultsForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueryJobResultsForProjectPathParams;

  @Metadata()
  queryParams: GetQueryJobResultsForProjectQueryParams;

  @Metadata()
  security: GetQueryJobResultsForProjectSecurity;
}


export class GetQueryJobResultsForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  queryjobProjectResults?: shared.QueryjobProjectResults;
}
