import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCoveragePlanMemberElectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=plan_id" })
  planId: string;
}


export class GetCoveragePlanMemberElectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetCoveragePlanMemberElectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCoveragePlanMemberElectionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCoveragePlanMemberElectionsQueryParams;
}


export class GetCoveragePlanMemberElectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedMemberElectionResult?: shared.PaginatedMemberElectionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
