import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamPrefixesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contains" })
  contains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_pool" })
  isPool?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mask_length" })
  maskLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan_id" })
  vlanId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan_vid" })
  vlanVid?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vrf" })
  vrf?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vrf_id" })
  vrfId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=within" })
  within?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=within_include" })
  withinInclude?: string;
}


export class IpamPrefixesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Prefix })
  results: shared.Prefix[];
}


export class IpamPrefixesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IpamPrefixesListQueryParams;
}


export class IpamPrefixesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipamPrefixesList200ApplicationJsonObject?: IpamPrefixesList200ApplicationJson;
}
