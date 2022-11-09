import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSshKeysSortEnum {
    Id = "id"
,    IdAsc = "id:asc"
,    IdDesc = "id:desc"
,    Name = "name"
,    NameAsc = "name:asc"
,    NameDesc = "name:desc"
}


export class GetSshKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetSshKeysSortEnum;
}


export class GetSshKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSshKeysQueryParams;
}


export class GetSshKeys200ApplicationJsonMetaPagination extends SpeakeasyBase {
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


export class GetSshKeys200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetSshKeys200ApplicationJsonMetaPagination;
}


export class GetSshKeys200ApplicationJsonSshKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey: string;
}


export class GetSshKeys200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: GetSshKeys200ApplicationJsonMeta;

  @Metadata({ data: "json, name=ssh_keys", elemType: operations.GetSshKeys200ApplicationJsonSshKeys })
  sshKeys: GetSshKeys200ApplicationJsonSshKeys[];
}


export class GetSshKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSshKeys200ApplicationJsonObject?: GetSshKeys200ApplicationJson;

  @Metadata()
  statusCode: number;
}
