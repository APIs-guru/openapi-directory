import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationVirtualMachinesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster" })
  cluster?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_group" })
  clusterGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id" })
  clusterGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_id" })
  clusterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_type" })
  clusterType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_type_id" })
  clusterTypeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform_id" })
  platformId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: number;

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
}


export class VirtualizationVirtualMachinesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VirtualizationVirtualMachinesListQueryParams;
}


export class VirtualizationVirtualMachinesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.VirtualMachine })
  results: shared.VirtualMachine[];
}


export class VirtualizationVirtualMachinesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualizationVirtualMachinesList200ApplicationJsonObject?: VirtualizationVirtualMachinesList200ApplicationJson;
}
