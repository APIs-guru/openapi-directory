import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRacksListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=desc_units" })
  descUnits?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facility_id" })
  facilityId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=u_height" })
  uHeight?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: string;
}


export class DcimRacksListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimRacksListQueryParams;
}


export class DcimRacksList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Rack })
  results: shared.Rack[];
}


export class DcimRacksListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimRacksList200ApplicationJsonObject?: DcimRacksList200ApplicationJson;
}
