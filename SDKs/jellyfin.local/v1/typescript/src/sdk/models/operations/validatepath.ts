import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidatePathRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  validatePathDto?: shared.ValidatePathDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  validatePathDto1?: shared.ValidatePathDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  validatePathDto2?: shared.ValidatePathDto;
}


export class ValidatePathSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ValidatePathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: ValidatePathRequests;

  @SpeakeasyMetadata()
  security: ValidatePathSecurity;
}


export class ValidatePathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
