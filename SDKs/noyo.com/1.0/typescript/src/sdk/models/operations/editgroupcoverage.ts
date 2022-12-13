import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditGroupCoveragePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_coverage_id" })
  groupCoverageId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditGroupCoverageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditGroupCoveragePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GroupCoverageEditRequest;
}


export class EditGroupCoverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupCoverageResult?: shared.GroupCoverageResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
