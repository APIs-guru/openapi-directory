import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRackReservationsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_id" })
  rackId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: string;
}


export class DcimRackReservationsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.RackReservation })
  results: shared.RackReservation[];
}


export class DcimRackReservationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimRackReservationsListQueryParams;
}


export class DcimRackReservationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimRackReservationsList200ApplicationJsonObject?: DcimRackReservationsList200ApplicationJson;
}
