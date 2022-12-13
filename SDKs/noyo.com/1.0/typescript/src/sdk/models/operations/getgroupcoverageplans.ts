import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupCoveragePlansPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_coverage_id" })
  groupCoverageId: string;
}


export class GetGroupCoveragePlansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupCoveragePlansPathParams;
}


export class GetGroupCoveragePlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedCoveragePlanResult?: shared.PaginatedCoveragePlanResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
