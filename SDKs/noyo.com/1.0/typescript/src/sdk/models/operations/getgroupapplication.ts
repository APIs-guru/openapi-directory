import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class GetGroupApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupApplicationPathParams;
}


export class GetGroupApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupApplicationResult?: shared.GroupApplicationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
