import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQuickSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;
}


export class GetQuickSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQuickSearchQueryParams;
}


export class GetQuickSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
