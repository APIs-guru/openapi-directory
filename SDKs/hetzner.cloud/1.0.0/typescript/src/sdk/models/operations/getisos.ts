import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIsosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetIsosRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetIsosQueryParams;
}

export enum GetIsos200ApplicationJsonIsosTypeEnum {
    Public = "public"
,    Private = "private"
}


export class GetIsos200ApplicationJsonIsos extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: GetIsos200ApplicationJsonIsosTypeEnum;
}


export class GetIsos200ApplicationJsonMetaPagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_page" })
  lastPage: number;

  @Metadata({ data: "json, name=next_page" })
  nextPage: number;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=per_page" })
  perPage: number;

  @Metadata({ data: "json, name=previous_page" })
  previousPage: number;

  @Metadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetIsos200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetIsos200ApplicationJsonMetaPagination;
}


export class GetIsos200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=isos", elemType: operations.GetIsos200ApplicationJsonIsos })
  isos: GetIsos200ApplicationJsonIsos[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetIsos200ApplicationJsonMeta;
}


export class GetIsosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getIsos200ApplicationJsonObject?: GetIsos200ApplicationJson;

  @Metadata()
  statusCode: number;
}
