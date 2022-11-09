import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimCablesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=color__n" })
  colorN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label__ic" })
  labelIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label__ie" })
  labelIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label__iew" })
  labelIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label__isw" })
  labelIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label__n" })
  labelN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label__nic" })
  labelNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label__nie" })
  labelNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label__niew" })
  labelNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label__nisw" })
  labelNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length__gt" })
  lengthGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length__gte" })
  lengthGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length__lt" })
  lengthLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length__lte" })
  lengthLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length__n" })
  lengthN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length_unit" })
  lengthUnit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length_unit__n" })
  lengthUnitN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack" })
  rack?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_id" })
  rackId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status__n" })
  statusN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;
}


export class DcimCablesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimCablesListQueryParams;
}


export class DcimCablesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Cable })
  results: shared.Cable[];
}


export class DcimCablesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimCablesList200ApplicationJsonObject?: DcimCablesList200ApplicationJson;
}
