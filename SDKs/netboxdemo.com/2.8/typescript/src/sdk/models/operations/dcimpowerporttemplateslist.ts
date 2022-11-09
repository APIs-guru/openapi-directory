import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPortTemplatesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allocated_draw" })
  allocatedDraw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__gt" })
  allocatedDrawGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__gte" })
  allocatedDrawGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__lt" })
  allocatedDrawLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__lte" })
  allocatedDrawLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__n" })
  allocatedDrawN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=devicetype_id" })
  devicetypeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=devicetype_id__n" })
  devicetypeIdN?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maximum_draw" })
  maximumDraw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__gt" })
  maximumDrawGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__gte" })
  maximumDrawGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__lt" })
  maximumDrawLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__lte" })
  maximumDrawLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__n" })
  maximumDrawN?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;
}


export class DcimPowerPortTemplatesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimPowerPortTemplatesListQueryParams;
}


export class DcimPowerPortTemplatesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.PowerPortTemplate })
  results: shared.PowerPortTemplate[];
}


export class DcimPowerPortTemplatesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimPowerPortTemplatesList200ApplicationJsonObject?: DcimPowerPortTemplatesList200ApplicationJson;
}
