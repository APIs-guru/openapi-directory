import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationVirtualMachinesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group" })
  clusterGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id" })
  clusterGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type" })
  clusterType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type_id" })
  clusterTypeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id" })
  platformId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: number;

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
}


export class VirtualizationVirtualMachinesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VirtualMachine })
  results: shared.VirtualMachine[];
}


export class VirtualizationVirtualMachinesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VirtualizationVirtualMachinesListQueryParams;
}


export class VirtualizationVirtualMachinesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  virtualizationVirtualMachinesList200ApplicationJsonObject?: VirtualizationVirtualMachinesList200ApplicationJson;
}
