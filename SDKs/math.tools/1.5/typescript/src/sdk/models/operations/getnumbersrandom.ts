import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersRandomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=total" })
  total?: number;
}


export class GetNumbersRandomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersRandomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersRandomQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersRandomSecurity;
}


export class GetNumbersRandomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
