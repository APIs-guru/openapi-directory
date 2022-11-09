import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=filename" })
  filename?: string;

  @Metadata({ data: "multipart_form, name=source" })
  source?: string;
}


export class ValidateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: ValidateRequestBody;
}


export class ValidateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validate400ApplicationJsonAny?: any;

  @Metadata()
  validationResult?: shared.ValidationResult;
}
