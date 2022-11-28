import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsCircuitsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid" })
  cid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid__ic" })
  cidIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid__ie" })
  cidIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid__iew" })
  cidIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid__isw" })
  cidIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid__n" })
  cidN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid__nic" })
  cidNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid__nie" })
  cidNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid__niew" })
  cidNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid__nisw" })
  cidNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit_rate" })
  commitRate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit_rate__gt" })
  commitRateGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit_rate__gte" })
  commitRateGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit_rate__lt" })
  commitRateLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit_rate__lte" })
  commitRateLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit_rate__n" })
  commitRateN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=install_date" })
  installDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=install_date__gt" })
  installDateGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=install_date__gte" })
  installDateGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=install_date__lt" })
  installDateLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=install_date__lte" })
  installDateLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=install_date__n" })
  installDateN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider__n" })
  providerN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider_id" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider_id__n" })
  providerIdN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type_id" })
  typeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type_id__n" })
  typeIdN?: string;
}


export class CircuitsCircuitsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Circuit })
  results: shared.Circuit[];
}


export class CircuitsCircuitsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CircuitsCircuitsListQueryParams;
}


export class CircuitsCircuitsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  circuitsCircuitsList200ApplicationJsonObject?: CircuitsCircuitsList200ApplicationJson;
}
