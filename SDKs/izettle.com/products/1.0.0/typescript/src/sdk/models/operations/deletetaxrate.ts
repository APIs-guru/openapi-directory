import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTaxRatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxRateUuid" })
  taxRateUuid: string;
}


export class DeleteTaxRateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class DeleteTaxRateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTaxRatePathParams;

  @SpeakeasyMetadata()
  security: DeleteTaxRateSecurity;
}


export class DeleteTaxRateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
