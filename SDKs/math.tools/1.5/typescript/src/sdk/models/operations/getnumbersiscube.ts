import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersIsCubeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersIsCubeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersIsCubeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersIsCubeQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersIsCubeSecurity;
}


export class GetNumbersIsCubeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
