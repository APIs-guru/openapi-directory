import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerOutletsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;
}


export class DcimPowerOutletsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimPowerOutletsListQueryParams;
}


export class DcimPowerOutletsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.PowerOutlet })
  results: shared.PowerOutlet[];
}


export class DcimPowerOutletsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimPowerOutletsList200ApplicationJsonObject?: DcimPowerOutletsList200ApplicationJson;
}
