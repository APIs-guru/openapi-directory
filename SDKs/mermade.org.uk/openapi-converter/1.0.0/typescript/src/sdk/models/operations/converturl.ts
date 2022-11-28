import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConvertUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class ConvertUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ConvertUrlQueryParams;
}


export class ConvertUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  convertUrl200ApplicationJsonAny?: any;
}
