import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersIsTriangleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersIsTriangleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersIsTriangleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersIsTriangleQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersIsTriangleSecurity;
}


export class GetNumbersIsTriangleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
