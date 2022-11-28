import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCookiesSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=freeform" })
  freeform?: string;
}


export class GetCookiesSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCookiesSetQueryParams;
}


export class GetCookiesSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
