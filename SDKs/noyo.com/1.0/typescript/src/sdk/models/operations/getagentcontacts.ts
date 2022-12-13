import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAgentContactsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class GetAgentContactsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetAgentContactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentContactsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAgentContactsQueryParams;
}


export class GetAgentContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedAgentContactResults?: shared.PaginatedAgentContactResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
