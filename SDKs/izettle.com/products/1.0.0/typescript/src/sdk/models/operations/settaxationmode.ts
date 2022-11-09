import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetTaxationModeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class SetTaxationModeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class SetTaxationModeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SetTaxationModeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SetTaxationModeSecurityOption2;
}


export class SetTaxationModeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TaxSettingsUpdateRequest;

  @Metadata()
  security: SetTaxationModeSecurity;
}


export class SetTaxationModeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxSettingsResponse?: shared.TaxSettingsResponse;
}
