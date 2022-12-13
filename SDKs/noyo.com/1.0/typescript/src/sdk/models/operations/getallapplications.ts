import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllApplicationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application_type" })
  applicationType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carrier_id" })
  carrierId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class GetAllApplicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllApplicationsQueryParams;
}


export class GetAllApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedGroupApplicationResult?: shared.PaginatedGroupApplicationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
