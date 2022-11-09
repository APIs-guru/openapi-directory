import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamPrefixesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=contains" })
  contains?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_pool" })
  isPool?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mask_length" })
  maskLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vlan_id" })
  vlanId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vlan_vid" })
  vlanVid?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf" })
  vrf?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf_id" })
  vrfId?: string;

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
