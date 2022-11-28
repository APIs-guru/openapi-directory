import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIsosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}

export enum GetIsos200ApplicationJsonIsosTypeEnum {
    Public = "public",
    Private = "private"
}


export class GetIsos200ApplicationJsonIsos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetIsos200ApplicationJsonIsosTypeEnum;
}


export class GetIsos200ApplicationJsonMetaPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_page" })
  lastPage: number;

  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page" })
  previousPage: number;

  @SpeakeasyMetadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetIsos200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetIsos200ApplicationJsonMetaPagination;
}


export class GetIsos200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isos", elemType: GetIsos200ApplicationJsonIsos })
  isos: GetIsos200ApplicationJsonIsos[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetIsos200ApplicationJsonMeta;
}


export class GetIsosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetIsosQueryParams;
}


export class GetIsosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getIsos200ApplicationJsonObject?: GetIsos200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
