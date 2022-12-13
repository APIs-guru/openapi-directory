import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAgentLocationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class GetAgentLocationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetAgentLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentLocationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAgentLocationsQueryParams;
}


export class GetAgentLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedAgentLocationResult?: shared.PaginatedAgentLocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
