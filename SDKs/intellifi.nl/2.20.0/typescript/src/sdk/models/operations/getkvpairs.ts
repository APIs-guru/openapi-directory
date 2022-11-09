import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetKvPairsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=after_id" })
  afterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before_id" })
  beforeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from_id" })
  fromId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id_only" })
  idOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=kv_key" })
  kvKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=populate" })
  populate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=results_only" })
  resultsOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=select" })
  select?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout_s" })
  timeoutS?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=until" })
  until?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=until_id" })
  untilId?: string;
}


export class GetKvPairsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetKvPairsQueryParams;
}


export class GetKvPairs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=count_current" })
  countCurrent?: number;

  @Metadata({ data: "json, name=is_limited" })
  isLimited?: boolean;

  @Metadata({ data: "json, name=next_url" })
  nextUrl?: string;

  @Metadata({ data: "json, name=query_duration_ms" })
  queryDurationMs?: number;

  @Metadata({ data: "json, name=results", elemType: shared.KeyValuePair })
  results?: shared.KeyValuePair[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetKvPairsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getKvPairs200ApplicationJsonObject?: GetKvPairs200ApplicationJson;
}
