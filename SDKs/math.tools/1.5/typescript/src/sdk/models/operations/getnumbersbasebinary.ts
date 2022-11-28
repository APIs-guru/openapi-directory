import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersBaseBinaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;
}


export class GetNumbersBaseBinarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersBaseBinaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersBaseBinaryQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersBaseBinarySecurity;
}


export class GetNumbersBaseBinaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
