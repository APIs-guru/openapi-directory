import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditGroupApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditGroupApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditGroupApplicationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ApplicationEditRequest;
}


export class EditGroupApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupApplicationResult?: shared.GroupApplicationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
