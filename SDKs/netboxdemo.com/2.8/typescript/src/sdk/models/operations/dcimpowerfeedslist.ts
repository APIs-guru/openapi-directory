import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerFeedsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=amperage" })
  amperage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=amperage__gt" })
  amperageGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=amperage__gte" })
  amperageGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=amperage__lt" })
  amperageLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=amperage__lte" })
  amperageLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=amperage__n" })
  amperageN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_utilization" })
  maxUtilization?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_utilization__gt" })
  maxUtilizationGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_utilization__gte" })
  maxUtilizationGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_utilization__lt" })
  maxUtilizationLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_utilization__lte" })
  maxUtilizationLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_utilization__n" })
  maxUtilizationN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ic" })
  nameIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ie" })
  nameIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__iew" })
  nameIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__isw" })
  nameIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__n" })
  nameN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nic" })
  nameNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nie" })
  nameNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__niew" })
  nameNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nisw" })
  nameNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phase" })
  phase?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phase__n" })
  phaseN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=power_panel_id" })
  powerPanelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=power_panel_id__n" })
  powerPanelIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_id" })
  rackId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_id__n" })
  rackIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region__n" })
  regionN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region_id__n" })
  regionIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site__n" })
  siteN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id__n" })
  siteIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status__n" })
  statusN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supply" })
  supply?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supply__n" })
  supplyN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voltage" })
  voltage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voltage__gt" })
  voltageGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voltage__gte" })
  voltageGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voltage__lt" })
  voltageLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voltage__lte" })
  voltageLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voltage__n" })
  voltageN?: string;
}


export class DcimPowerFeedsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimPowerFeedsListQueryParams;
}


export class DcimPowerFeedsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.PowerFeed })
  results: shared.PowerFeed[];
}


export class DcimPowerFeedsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimPowerFeedsList200ApplicationJsonObject?: DcimPowerFeedsList200ApplicationJson;
}
