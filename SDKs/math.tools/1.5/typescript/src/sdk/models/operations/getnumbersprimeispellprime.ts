import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersPrimeIsPellPrimeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersPrimeIsPellPrimeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPrimeIsPellPrimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersPrimeIsPellPrimeQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersPrimeIsPellPrimeSecurity;
}


export class GetNumbersPrimeIsPellPrimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
