import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSshKeysSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc"
}


export class GetSshKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetSshKeysSortEnum;
}


export class GetSshKeys200ApplicationJsonMetaPagination extends SpeakeasyBase {
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


export class GetSshKeys200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetSshKeys200ApplicationJsonMetaPagination;
}


export class GetSshKeys200ApplicationJsonSshKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey: string;
}


export class GetSshKeys200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetSshKeys200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=ssh_keys", elemType: GetSshKeys200ApplicationJsonSshKeys })
  sshKeys: GetSshKeys200ApplicationJsonSshKeys[];
}


export class GetSshKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSshKeysQueryParams;
}


export class GetSshKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSshKeys200ApplicationJsonObject?: GetSshKeys200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
