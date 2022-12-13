import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditCoveragePlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=plan_id" })
  planId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditCoveragePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditCoveragePlanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CoveragePlanEditRequest;
}


export class EditCoveragePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  coveragePlanResult?: shared.CoveragePlanResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
