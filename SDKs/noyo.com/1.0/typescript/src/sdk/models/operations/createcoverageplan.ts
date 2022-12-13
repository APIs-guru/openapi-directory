import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCoveragePlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_coverage_id" })
  groupCoverageId: string;
}


export class CreateCoveragePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCoveragePlanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CoveragePlanCreateRequest;
}


export class CreateCoveragePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  coveragePlanResult?: shared.CoveragePlanResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
