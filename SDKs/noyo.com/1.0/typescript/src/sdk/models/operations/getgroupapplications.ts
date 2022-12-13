import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupApplicationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class GetGroupApplicationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application_type" })
  applicationType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carrier_group_id" })
  carrierGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carrier_id" })
  carrierId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class GetGroupApplicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupApplicationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGroupApplicationsQueryParams;
}


export class GetGroupApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedGroupApplicationResult?: shared.PaginatedGroupApplicationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
