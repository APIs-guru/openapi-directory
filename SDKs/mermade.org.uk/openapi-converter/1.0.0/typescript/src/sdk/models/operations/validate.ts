import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=source" })
  source?: string;
}


export class ValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: ValidateRequestBody;
}


export class ValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validate400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  validationResult?: shared.ValidationResult;
}
