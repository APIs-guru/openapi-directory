import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInventoryItemsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device__n" })
  deviceN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id__n" })
  deviceIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=discovered" })
  discovered?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer__n" })
  manufacturerN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" })
  manufacturerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id__n" })
  manufacturerIdN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_id" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_id__n" })
  parentIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id" })
  partId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__ic" })
  partIdIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__ie" })
  partIdIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__iew" })
  partIdIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__isw" })
  partIdIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__n" })
  partIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__nic" })
  partIdNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__nie" })
  partIdNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__niew" })
  partIdNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__nisw" })
  partIdNisw?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;
}


export class DcimInventoryItemsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.InventoryItem })
  results: shared.InventoryItem[];
}


export class DcimInventoryItemsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimInventoryItemsListQueryParams;
}


export class DcimInventoryItemsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimInventoryItemsList200ApplicationJsonObject?: DcimInventoryItemsList200ApplicationJson;
}
