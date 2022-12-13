import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupCoveragePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_coverage_id" })
  groupCoverageId: string;
}


export class GetGroupCoverageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupCoveragePathParams;
}


export class GetGroupCoverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupCoverageResult?: shared.GroupCoverageResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
