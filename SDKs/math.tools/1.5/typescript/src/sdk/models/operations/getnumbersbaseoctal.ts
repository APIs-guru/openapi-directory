import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersBaseOctalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;
}


export class GetNumbersBaseOctalSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersBaseOctalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersBaseOctalQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersBaseOctalSecurity;
}


export class GetNumbersBaseOctalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
