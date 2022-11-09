import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamVrfsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enforce_unique" })
  enforceUnique?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ic" })
  nameIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ie" })
  nameIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__iew" })
  nameIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__isw" })
  nameIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__n" })
  nameN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nic" })
  nameNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nie" })
  nameNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__niew" })
  nameNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nisw" })
  nameNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd" })
  rd?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd__ic" })
  rdIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd__ie" })
  rdIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd__iew" })
  rdIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd__isw" })
  rdIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd__n" })
  rdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd__nic" })
  rdNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd__nie" })
  rdNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd__niew" })
  rdNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rd__nisw" })
  rdNisw?: string;

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
}


export class IpamVrfsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IpamVrfsListQueryParams;
}


export class IpamVrfsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Vrf })
  results: shared.Vrf[];
}


export class IpamVrfsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipamVrfsList200ApplicationJsonObject?: IpamVrfsList200ApplicationJson;
}
