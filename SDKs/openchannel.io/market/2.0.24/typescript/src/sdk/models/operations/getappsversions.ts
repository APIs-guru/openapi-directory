import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppsVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageNumber" })
  pageNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetAppsVersionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAppsVersionsQueryParams;
}


export class GetAppsVersionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
