import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersPrimeIsPartitionPrimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersPrimeIsPartitionPrimeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPrimeIsPartitionPrimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersPrimeIsPartitionPrimeQueryParams;

  @Metadata()
  security: GetNumbersPrimeIsPartitionPrimeSecurity;
}


export class GetNumbersPrimeIsPartitionPrimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
