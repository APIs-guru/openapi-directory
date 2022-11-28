import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;
}


export class GetSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSearchQueryParams;
}


export class GetSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
