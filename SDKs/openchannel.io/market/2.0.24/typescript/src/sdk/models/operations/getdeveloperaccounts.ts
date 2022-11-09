import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeveloperAccountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageNumber" })
  pageNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetDeveloperAccountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeveloperAccountsQueryParams;
}


export class GetDeveloperAccountsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
