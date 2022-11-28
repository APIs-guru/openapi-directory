import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsoleServerPortsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabled" })
  cabled?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connection_status" })
  connectionStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connection_status__n" })
  connectionStatusN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ic" })
  descriptionIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ie" })
  descriptionIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__iew" })
  descriptionIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__isw" })
  descriptionIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__n" })
  descriptionN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nic" })
  descriptionNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nie" })
  descriptionNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__niew" })
  descriptionNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nisw" })
  descriptionNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device__n" })
  deviceN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id__n" })
  deviceIdN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;
}


export class DcimConsoleServerPortsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ConsoleServerPort })
  results: shared.ConsoleServerPort[];
}


export class DcimConsoleServerPortsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimConsoleServerPortsListQueryParams;
}


export class DcimConsoleServerPortsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimConsoleServerPortsList200ApplicationJsonObject?: DcimConsoleServerPortsList200ApplicationJson;
}
