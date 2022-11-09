import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionRelatedListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dataset" })
  dataset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featured" })
  featured?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type_filter" })
  typeFilter?: string;
}


export class GetActionRelatedListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionRelatedListQueryParams;
}


export class GetActionRelatedListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
