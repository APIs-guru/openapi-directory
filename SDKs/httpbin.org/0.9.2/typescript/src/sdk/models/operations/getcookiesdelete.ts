import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCookiesDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=freeform" })
  freeform?: string;
}


export class GetCookiesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCookiesDeleteQueryParams;
}


export class GetCookiesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
