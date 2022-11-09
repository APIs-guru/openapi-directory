import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cabled" })
  cabled?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=connection_status" })
  connectionStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=connection_status__n" })
  connectionStatusN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__ic" })
  descriptionIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__ie" })
  descriptionIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__iew" })
  descriptionIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__isw" })
  descriptionIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__n" })
  descriptionN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__nic" })
  descriptionNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__nie" })
  descriptionNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__niew" })
  descriptionNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__nisw" })
  descriptionNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device__n" })
  deviceN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id__n" })
  deviceIdN?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;
}


export class DcimConsoleServerPortsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimConsoleServerPortsListQueryParams;
}


export class DcimConsoleServerPortsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.ConsoleServerPort })
  results: shared.ConsoleServerPort[];
}


export class DcimConsoleServerPortsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimConsoleServerPortsList200ApplicationJsonObject?: DcimConsoleServerPortsList200ApplicationJson;
}
