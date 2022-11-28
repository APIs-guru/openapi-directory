import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersBaseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: number;
}


export class GetNumbersBaseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersBaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersBaseQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersBaseSecurity;
}


export class GetNumbersBaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
