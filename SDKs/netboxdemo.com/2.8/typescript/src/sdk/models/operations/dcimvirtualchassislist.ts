import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimVirtualChassisListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain__ic" })
  domainIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain__ie" })
  domainIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain__iew" })
  domainIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain__isw" })
  domainIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain__n" })
  domainN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain__nic" })
  domainNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain__nie" })
  domainNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain__niew" })
  domainNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain__nisw" })
  domainNisw?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant__n" })
  tenantN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" })
  tenantIdN?: string;
}


export class DcimVirtualChassisListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimVirtualChassisListQueryParams;
}


export class DcimVirtualChassisList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.VirtualChassis })
  results: shared.VirtualChassis[];
}


export class DcimVirtualChassisListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimVirtualChassisList200ApplicationJsonObject?: DcimVirtualChassisList200ApplicationJson;
}
