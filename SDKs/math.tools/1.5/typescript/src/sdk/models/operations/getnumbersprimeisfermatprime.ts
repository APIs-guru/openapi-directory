import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersPrimeIsFermatPrimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersPrimeIsFermatPrimeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPrimeIsFermatPrimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersPrimeIsFermatPrimeQueryParams;

  @Metadata()
  security: GetNumbersPrimeIsFermatPrimeSecurity;
}


export class GetNumbersPrimeIsFermatPrimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
