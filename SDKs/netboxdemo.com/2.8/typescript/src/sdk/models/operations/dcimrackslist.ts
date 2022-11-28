import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRacksListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__ic" })
  assetTagIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__ie" })
  assetTagIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__iew" })
  assetTagIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__isw" })
  assetTagIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__n" })
  assetTagN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nic" })
  assetTagNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nie" })
  assetTagNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__niew" })
  assetTagNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nisw" })
  assetTagNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=desc_units" })
  descUnits?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id" })
  facilityId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id__ic" })
  facilityIdIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id__ie" })
  facilityIdIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id__iew" })
  facilityIdIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id__isw" })
  facilityIdIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id__n" })
  facilityIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id__nic" })
  facilityIdNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id__nie" })
  facilityIdNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id__niew" })
  facilityIdNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility_id__nisw" })
  facilityIdNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group__n" })
  groupN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id__n" })
  groupIdN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_depth" })
  outerDepth?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_depth__gt" })
  outerDepthGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_depth__gte" })
  outerDepthGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_depth__lt" })
  outerDepthLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_depth__lte" })
  outerDepthLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_depth__n" })
  outerDepthN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_unit" })
  outerUnit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_unit__n" })
  outerUnitN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_width" })
  outerWidth?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_width__gt" })
  outerWidthGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_width__gte" })
  outerWidthGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_width__lt" })
  outerWidthLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_width__lte" })
  outerWidthLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outer_width__n" })
  outerWidthN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role__n" })
  roleN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id__n" })
  roleIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" })
  tenantN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group" })
  tenantGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" })
  tenantGroupN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" })
  tenantGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" })
  tenantGroupIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" })
  tenantIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height" })
  uHeight?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__gt" })
  uHeightGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__gte" })
  uHeightGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__lt" })
  uHeightLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__lte" })
  uHeightLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__n" })
  uHeightN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width__n" })
  widthN?: string;
}


export class DcimRacksList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Rack })
  results: shared.Rack[];
}


export class DcimRacksListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimRacksListQueryParams;
}


export class DcimRacksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimRacksList200ApplicationJsonObject?: DcimRacksList200ApplicationJson;
}
