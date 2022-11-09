import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamPrefixesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=contains" })
  contains?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_pool" })
  isPool?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mask_length" })
  maskLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role__n" })
  roleN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role_id__n" })
  roleIdN?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant__n" })
  tenantN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_group" })
  tenantGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" })
  tenantGroupN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" })
  tenantGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" })
  tenantGroupIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" })
  tenantIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vlan_id" })
  vlanId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vlan_id__n" })
  vlanIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vlan_vid" })
  vlanVid?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf" })
  vrf?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf__n" })
  vrfN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf_id" })
  vrfId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf_id__n" })
  vrfIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=within" })
  within?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=within_include" })
  withinInclude?: string;
}


export class IpamPrefixesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IpamPrefixesListQueryParams;
}


export class IpamPrefixesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Prefix })
  results: shared.Prefix[];
}


export class IpamPrefixesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipamPrefixesList200ApplicationJsonObject?: IpamPrefixesList200ApplicationJson;
}
