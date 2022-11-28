import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamAggregatesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added" })
  dateAdded?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__gt" })
  dateAddedGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__gte" })
  dateAddedGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__lt" })
  dateAddedLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__lte" })
  dateAddedLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__n" })
  dateAddedN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" })
  idGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" })
  idGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" })
  idLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" })
  idLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" })
  idN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rir" })
  rir?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rir__n" })
  rirN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rir_id" })
  rirId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rir_id__n" })
  rirIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;
}


export class IpamAggregatesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Aggregate })
  results: shared.Aggregate[];
}


export class IpamAggregatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IpamAggregatesListQueryParams;
}


export class IpamAggregatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipamAggregatesList200ApplicationJsonObject?: IpamAggregatesList200ApplicationJson;
}
