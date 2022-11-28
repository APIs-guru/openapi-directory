import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamVlanGroupsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ic" })
  slugIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ie" })
  slugIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__iew" })
  slugIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__isw" })
  slugIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__n" })
  slugN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nic" })
  slugNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nie" })
  slugNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__niew" })
  slugNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" })
  slugNisw?: string;
}


export class IpamVlanGroupsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VlanGroup })
  results: shared.VlanGroup[];
}


export class IpamVlanGroupsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IpamVlanGroupsListQueryParams;
}


export class IpamVlanGroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipamVlanGroupsList200ApplicationJsonObject?: IpamVlanGroupsList200ApplicationJson;
}
