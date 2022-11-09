import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersBaseBinaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;
}


export class GetNumbersBaseBinarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersBaseBinaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersBaseBinaryQueryParams;

  @Metadata()
  security: GetNumbersBaseBinarySecurity;
}


export class GetNumbersBaseBinaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
