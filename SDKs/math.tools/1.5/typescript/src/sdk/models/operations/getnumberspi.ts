import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersPiQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: number;
}


export class GetNumbersPiSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersPiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersPiQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersPiSecurity;
}


export class GetNumbersPiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
