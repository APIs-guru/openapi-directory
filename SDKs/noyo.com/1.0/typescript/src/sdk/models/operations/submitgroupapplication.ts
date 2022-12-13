import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubmitGroupApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class SubmitGroupApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubmitGroupApplicationPathParams;
}


export class SubmitGroupApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationValidationResult?: shared.ApplicationValidationResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupApplicationResult?: shared.GroupApplicationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
