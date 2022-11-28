import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerPortTemplatesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allocated_draw" })
  allocatedDraw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__gt" })
  allocatedDrawGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__gte" })
  allocatedDrawGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__lt" })
  allocatedDrawLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__lte" })
  allocatedDrawLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allocated_draw__n" })
  allocatedDrawN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devicetype_id" })
  devicetypeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devicetype_id__n" })
  devicetypeIdN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximum_draw" })
  maximumDraw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__gt" })
  maximumDrawGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__gte" })
  maximumDrawGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__lt" })
  maximumDrawLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__lte" })
  maximumDrawLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximum_draw__n" })
  maximumDrawN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;
}


export class DcimPowerPortTemplatesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.PowerPortTemplate })
  results: shared.PowerPortTemplate[];
}


export class DcimPowerPortTemplatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimPowerPortTemplatesListQueryParams;
}


export class DcimPowerPortTemplatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimPowerPortTemplatesList200ApplicationJsonObject?: DcimPowerPortTemplatesList200ApplicationJson;
}
