import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerFeedsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage" })
  amperage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__gt" })
  amperageGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__gte" })
  amperageGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__lt" })
  amperageLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__lte" })
  amperageLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__n" })
  amperageN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization" })
  maxUtilization?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__gt" })
  maxUtilizationGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__gte" })
  maxUtilizationGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__lt" })
  maxUtilizationLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__lte" })
  maxUtilizationLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__n" })
  maxUtilizationN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" })
  nameIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" })
  nameIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" })
  nameIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" })
  nameIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" })
  nameN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" })
  nameNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" })
  nameNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" })
  nameNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" })
  nameNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phase" })
  phase?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phase__n" })
  phaseN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=power_panel_id" })
  powerPanelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=power_panel_id__n" })
  powerPanelIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_id" })
  rackId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_id__n" })
  rackIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" })
  regionN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" })
  regionIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" })
  siteN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" })
  siteIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status__n" })
  statusN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supply" })
  supply?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supply__n" })
  supplyN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage" })
  voltage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__gt" })
  voltageGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__gte" })
  voltageGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__lt" })
  voltageLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__lte" })
  voltageLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__n" })
  voltageN?: string;
}


export class DcimPowerFeedsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.PowerFeed })
  results: shared.PowerFeed[];
}


export class DcimPowerFeedsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimPowerFeedsListQueryParams;
}


export class DcimPowerFeedsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimPowerFeedsList200ApplicationJsonObject?: DcimPowerFeedsList200ApplicationJson;
}
