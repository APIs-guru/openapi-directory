import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsCircuitTerminationsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=circuit_id" })
  circuitId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=circuit_id__n" })
  circuitIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=port_speed" })
  portSpeed?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=port_speed__gt" })
  portSpeedGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=port_speed__gte" })
  portSpeedGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=port_speed__lt" })
  portSpeedLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=port_speed__lte" })
  portSpeedLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=port_speed__n" })
  portSpeedN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" })
  siteN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" })
  siteIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term_side" })
  termSide?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term_side__n" })
  termSideN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upstream_speed" })
  upstreamSpeed?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__gt" })
  upstreamSpeedGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__gte" })
  upstreamSpeedGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__lt" })
  upstreamSpeedLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__lte" })
  upstreamSpeedLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__n" })
  upstreamSpeedN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id" })
  xconnectId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__ic" })
  xconnectIdIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__ie" })
  xconnectIdIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__iew" })
  xconnectIdIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__isw" })
  xconnectIdIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__n" })
  xconnectIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__nic" })
  xconnectIdNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__nie" })
  xconnectIdNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__niew" })
  xconnectIdNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__nisw" })
  xconnectIdNisw?: string;
}


export class CircuitsCircuitTerminationsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.CircuitTermination })
  results: shared.CircuitTermination[];
}


export class CircuitsCircuitTerminationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CircuitsCircuitTerminationsListQueryParams;
}


export class CircuitsCircuitTerminationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  circuitsCircuitTerminationsList200ApplicationJsonObject?: CircuitsCircuitTerminationsList200ApplicationJson;
}
