import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPanelsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_group_id" })
  rackGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_group_id__n" })
  rackGroupIdN?: string;

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
}


export class DcimPowerPanelsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimPowerPanelsListQueryParams;
}


export class DcimPowerPanelsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.PowerPanel })
  results: shared.PowerPanel[];
}


export class DcimPowerPanelsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimPowerPanelsList200ApplicationJsonObject?: DcimPowerPanelsList200ApplicationJson;
}
