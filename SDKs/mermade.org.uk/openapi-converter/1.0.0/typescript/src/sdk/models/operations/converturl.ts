import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConvertUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class ConvertUrlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ConvertUrlQueryParams;
}


export class ConvertUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  convertUrl200ApplicationJsonAny?: any;
}
