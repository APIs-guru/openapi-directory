import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTaxRatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxRateUuid" })
  taxRateUuid: string;
}


export class UpdateTaxRateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class UpdateTaxRateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTaxRatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TaxRateUpdateRequest;

  @SpeakeasyMetadata()
  security: UpdateTaxRateSecurity;
}


export class UpdateTaxRateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taxRate?: shared.TaxRate;
}
