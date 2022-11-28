import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}


export class GetProjectsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProjectsQueryParams;

  @SpeakeasyMetadata()
  security: GetProjectsSecurity;
}


export class GetProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  projectList?: shared.ProjectList;
}
