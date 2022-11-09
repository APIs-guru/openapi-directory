import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidateUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class ValidateUrlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ValidateUrlQueryParams;
}


export class ValidateUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationResult?: shared.ValidationResult;
}
