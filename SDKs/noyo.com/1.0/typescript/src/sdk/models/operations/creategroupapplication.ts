import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGroupApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class CreateGroupApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateGroupApplicationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ApplicationCreateRequest;
}


export class CreateGroupApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupApplicationResult?: shared.GroupApplicationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
