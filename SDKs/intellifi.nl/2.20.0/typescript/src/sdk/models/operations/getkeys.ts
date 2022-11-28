import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after_id" })
  afterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_id" })
  beforeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_id" })
  fromId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_only" })
  idOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_read_only" })
  isReadOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=populate" })
  populate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results_only" })
  resultsOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" })
  select?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout_s" })
  timeoutS?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until" })
  until?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until_id" })
  untilId?: string;
}


export class GetKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" })
  cookieSid: shared.SchemeCookieSid;
}


export class GetKeys200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=count_current" })
  countCurrent?: number;

  @SpeakeasyMetadata({ data: "json, name=is_limited" })
  isLimited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=next_url" })
  nextUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=query_duration_ms" })
  queryDurationMs?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Key })
  results?: shared.Key[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetKeysQueryParams;

  @SpeakeasyMetadata()
  security: GetKeysSecurity;
}


export class GetKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getKeys200ApplicationJsonObject?: GetKeys200ApplicationJson;
}
