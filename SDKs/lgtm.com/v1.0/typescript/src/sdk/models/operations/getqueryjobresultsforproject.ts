import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryJobResultsForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryjob-id" })
  queryjobId: string;
}


export class GetQueryJobResultsForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nofilter" })
  nofilter?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetQueryJobResultsForProjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetQueryJobResultsForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueryJobResultsForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueryJobResultsForProjectQueryParams;

  @SpeakeasyMetadata()
  security: GetQueryJobResultsForProjectSecurity;
}


export class GetQueryJobResultsForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  queryjobProjectResults?: shared.QueryjobProjectResults;
}
