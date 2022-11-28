import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersPrimeIsPerfectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersPrimeIsPerfectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPrimeIsPerfectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersPrimeIsPerfectQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersPrimeIsPerfectSecurity;
}


export class GetNumbersPrimeIsPerfectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
