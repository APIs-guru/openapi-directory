import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBlobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=after_id" })
  afterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before_id" })
  beforeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=blob_key" })
  blobKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=content_type" })
  contentType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filename" })
  filename?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from_id" })
  fromId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hash" })
  hash?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id_only" })
  idOnly?: boolean;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=time_last_accessed" })
  timeLastAccessed?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout_s" })
  timeoutS?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=until" })
  until?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=until_id" })
  untilId?: string;
}


export class GetBlobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBlobsQueryParams;
}


export class GetBlobs200ApplicationJson extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=results", elemType: shared.Blob })
  results?: shared.Blob[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetBlobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBlobs200ApplicationJsonObject?: GetBlobs200ApplicationJson;
}
