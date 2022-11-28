import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersPrimeIsPartitionPrimeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersPrimeIsPartitionPrimeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPrimeIsPartitionPrimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersPrimeIsPartitionPrimeQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersPrimeIsPartitionPrimeSecurity;
}


export class GetNumbersPrimeIsPartitionPrimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
