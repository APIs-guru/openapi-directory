import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApplicationAgentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class GetApplicationAgentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetApplicationAgentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApplicationAgentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApplicationAgentsQueryParams;
}


export class GetApplicationAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedAgentResult?: shared.PaginatedAgentResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
