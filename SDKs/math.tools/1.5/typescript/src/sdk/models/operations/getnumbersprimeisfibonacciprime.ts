import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersPrimeIsFibonacciPrimeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersPrimeIsFibonacciPrimeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPrimeIsFibonacciPrimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersPrimeIsFibonacciPrimeQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersPrimeIsFibonacciPrimeSecurity;
}


export class GetNumbersPrimeIsFibonacciPrimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
