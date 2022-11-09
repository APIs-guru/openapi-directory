import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamAggregatesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_added" })
  dateAdded?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_added__gt" })
  dateAddedGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_added__gte" })
  dateAddedGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_added__lt" })
  dateAddedLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_added__lte" })
  dateAddedLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_added__n" })
  dateAddedN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__gt" })
  idGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__gte" })
  idGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__lt" })
  idLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__lte" })
  idLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__n" })
  idN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rir" })
  rir?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rir__n" })
  rirN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rir_id" })
  rirId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rir_id__n" })
  rirIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;
}


export class IpamAggregatesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IpamAggregatesListQueryParams;
}


export class IpamAggregatesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Aggregate })
  results: shared.Aggregate[];
}


export class IpamAggregatesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipamAggregatesList200ApplicationJsonObject?: IpamAggregatesList200ApplicationJson;
}
