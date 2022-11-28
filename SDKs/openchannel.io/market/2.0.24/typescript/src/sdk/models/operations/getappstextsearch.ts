import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppsTextSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isOwned" })
  isOwned?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAppsTextSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAppsTextSearchQueryParams;
}


export class GetAppsTextSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
