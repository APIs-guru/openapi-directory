import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersPrimeIsMersennePrimeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersPrimeIsMersennePrimeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPrimeIsMersennePrimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersPrimeIsMersennePrimeQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersPrimeIsMersennePrimeSecurity;
}


export class GetNumbersPrimeIsMersennePrimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
