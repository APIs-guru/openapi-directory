import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimCablesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__n" })
  colorN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label__ic" })
  labelIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label__ie" })
  labelIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label__iew" })
  labelIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label__isw" })
  labelIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label__n" })
  labelN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label__nic" })
  labelNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label__nie" })
  labelNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label__niew" })
  labelNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label__nisw" })
  labelNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length__gt" })
  lengthGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length__gte" })
  lengthGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length__lt" })
  lengthLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length__lte" })
  lengthLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length__n" })
  lengthN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length_unit" })
  lengthUnit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length_unit__n" })
  lengthUnitN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack" })
  rack?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_id" })
  rackId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status__n" })
  statusN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;
}


export class DcimCablesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Cable })
  results: shared.Cable[];
}


export class DcimCablesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimCablesListQueryParams;
}


export class DcimCablesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimCablesList200ApplicationJsonObject?: DcimCablesList200ApplicationJson;
}
