import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTaxRatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxRateUuid" })
  taxRateUuid: string;
}


export class UpdateTaxRateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class UpdateTaxRateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class UpdateTaxRateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateTaxRateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateTaxRateSecurityOption2;
}


export class UpdateTaxRateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTaxRatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TaxRateUpdateRequest;

  @Metadata()
  security: UpdateTaxRateSecurity;
}


export class UpdateTaxRateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxRate?: shared.TaxRate;
}
