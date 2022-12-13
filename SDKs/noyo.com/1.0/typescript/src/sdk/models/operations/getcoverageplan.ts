import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCoveragePlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=plan_id" })
  planId: string;
}


export class GetCoveragePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCoveragePlanPathParams;
}


export class GetCoveragePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  coveragePlanResult?: shared.CoveragePlanResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
