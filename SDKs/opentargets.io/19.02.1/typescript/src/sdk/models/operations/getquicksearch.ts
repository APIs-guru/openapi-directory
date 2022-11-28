import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQuickSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;
}


export class GetQuickSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuickSearchQueryParams;
}


export class GetQuickSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
