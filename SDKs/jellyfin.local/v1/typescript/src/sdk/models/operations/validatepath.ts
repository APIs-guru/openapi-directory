import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidatePathRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  validatePathDto?: shared.ValidatePathDto;

  @Metadata({ data: "request, media_type=application/json" })
  validatePathDto1?: shared.ValidatePathDto;

  @Metadata({ data: "request, media_type=text/json" })
  validatePathDto2?: shared.ValidatePathDto;
}


export class ValidatePathSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ValidatePathRequest extends SpeakeasyBase {
  @Metadata()
  request: ValidatePathRequests;

  @Metadata()
  security: ValidatePathSecurity;
}


export class ValidatePathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
