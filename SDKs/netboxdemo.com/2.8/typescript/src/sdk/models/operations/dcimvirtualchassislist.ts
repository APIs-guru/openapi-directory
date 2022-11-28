import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimVirtualChassisListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__ic" })
  domainIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__ie" })
  domainIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__iew" })
  domainIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__isw" })
  domainIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__n" })
  domainN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__nic" })
  domainNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__nie" })
  domainNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__niew" })
  domainNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__nisw" })
  domainNisw?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" })
  tenantN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" })
  tenantIdN?: string;
}


export class DcimVirtualChassisList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VirtualChassis })
  results: shared.VirtualChassis[];
}


export class DcimVirtualChassisListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimVirtualChassisListQueryParams;
}


export class DcimVirtualChassisListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimVirtualChassisList200ApplicationJsonObject?: DcimVirtualChassisList200ApplicationJson;
}
