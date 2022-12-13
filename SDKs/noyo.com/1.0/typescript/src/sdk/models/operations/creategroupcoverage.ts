import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGroupCoveragePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class CreateGroupCoverageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateGroupCoveragePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GroupCoverageCreateRequest;
}


export class CreateGroupCoverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupCoverageResult?: shared.GroupCoverageResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
