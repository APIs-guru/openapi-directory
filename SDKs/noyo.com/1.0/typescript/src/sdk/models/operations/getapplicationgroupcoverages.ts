import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApplicationGroupCoveragesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class GetApplicationGroupCoveragesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetApplicationGroupCoveragesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApplicationGroupCoveragesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApplicationGroupCoveragesQueryParams;
}


export class GetApplicationGroupCoveragesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedGroupCoverageResult?: shared.PaginatedGroupCoverageResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
