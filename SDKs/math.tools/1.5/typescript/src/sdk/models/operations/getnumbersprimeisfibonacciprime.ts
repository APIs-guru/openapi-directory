import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersPrimeIsFibonacciPrimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersPrimeIsFibonacciPrimeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPrimeIsFibonacciPrimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersPrimeIsFibonacciPrimeQueryParams;

  @Metadata()
  security: GetNumbersPrimeIsFibonacciPrimeSecurity;
}


export class GetNumbersPrimeIsFibonacciPrimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
