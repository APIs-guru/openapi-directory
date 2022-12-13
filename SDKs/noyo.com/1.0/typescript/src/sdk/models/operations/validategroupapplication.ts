import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateGroupApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class ValidateGroupApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ValidateGroupApplicationPathParams;
}


export class ValidateGroupApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationValidationResult?: shared.ApplicationValidationResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
