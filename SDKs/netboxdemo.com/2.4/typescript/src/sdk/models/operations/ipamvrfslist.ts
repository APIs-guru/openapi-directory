import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamVrfsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforce_unique" })
  enforceUnique?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd" })
  rd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;
}


export class IpamVrfsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Vrf })
  results: shared.Vrf[];
}


export class IpamVrfsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IpamVrfsListQueryParams;
}


export class IpamVrfsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipamVrfsList200ApplicationJsonObject?: IpamVrfsList200ApplicationJson;
}
