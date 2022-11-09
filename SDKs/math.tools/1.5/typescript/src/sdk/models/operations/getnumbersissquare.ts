import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersIsSquareQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersIsSquareSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersIsSquareRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersIsSquareQueryParams;

  @Metadata()
  security: GetNumbersIsSquareSecurity;
}


export class GetNumbersIsSquareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
