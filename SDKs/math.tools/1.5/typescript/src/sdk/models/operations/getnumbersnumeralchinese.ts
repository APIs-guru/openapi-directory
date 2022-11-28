import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersNumeralChineseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersNumeralChineseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersNumeralChineseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersNumeralChineseQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersNumeralChineseSecurity;
}


export class GetNumbersNumeralChineseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
