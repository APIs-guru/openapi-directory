import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersPrimeIsMersennePrimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersPrimeIsMersennePrimeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPrimeIsMersennePrimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersPrimeIsMersennePrimeQueryParams;

  @Metadata()
  security: GetNumbersPrimeIsMersennePrimeSecurity;
}


export class GetNumbersPrimeIsMersennePrimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
