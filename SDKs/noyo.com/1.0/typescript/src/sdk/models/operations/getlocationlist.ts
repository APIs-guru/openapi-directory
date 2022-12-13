import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLocationListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class GetLocationListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetLocationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLocationListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLocationListQueryParams;
}


export class GetLocationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedLocationResult?: shared.PaginatedLocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
