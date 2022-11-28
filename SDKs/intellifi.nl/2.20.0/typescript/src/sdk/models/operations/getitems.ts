import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after_code" })
  afterCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after_id" })
  afterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_code" })
  beforeCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_id" })
  beforeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code_hex" })
  codeHex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_code" })
  fromCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_id" })
  fromId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_only" })
  idOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_present" })
  isPresent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=move_count" })
  moveCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=populate" })
  populate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=protocol" })
  protocol?: shared.ItemProtocolEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results_only" })
  resultsOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" })
  select?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sets" })
  sets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=technology" })
  technology?: shared.TechnologyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_last_present" })
  timeLastPresent?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_moved" })
  timeMoved?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout_s" })
  timeoutS?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.ItemTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until" })
  until?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until_code" })
  untilCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until_id" })
  untilId?: string;
}


export class GetItems200ApplicationJson extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Item })
  results?: shared.Item[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetItemsQueryParams;
}


export class GetItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getItems200ApplicationJsonObject?: GetItems200ApplicationJson;
}
