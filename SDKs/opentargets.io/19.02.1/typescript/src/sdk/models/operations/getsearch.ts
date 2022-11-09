import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;
}


export class GetSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchQueryParams;
}


export class GetSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
