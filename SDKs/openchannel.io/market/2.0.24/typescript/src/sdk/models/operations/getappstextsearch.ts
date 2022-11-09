import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppsTextSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isOwned" })
  isOwned?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageNumber" })
  pageNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAppsTextSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAppsTextSearchQueryParams;
}


export class GetAppsTextSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
