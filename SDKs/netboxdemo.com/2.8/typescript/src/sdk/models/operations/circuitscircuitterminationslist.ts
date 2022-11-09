import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTerminationsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=circuit_id" })
  circuitId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=circuit_id__n" })
  circuitIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=port_speed" })
  portSpeed?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=port_speed__gt" })
  portSpeedGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=port_speed__gte" })
  portSpeedGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=port_speed__lt" })
  portSpeedLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=port_speed__lte" })
  portSpeedLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=port_speed__n" })
  portSpeedN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site__n" })
  siteN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id__n" })
  siteIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=term_side" })
  termSide?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=term_side__n" })
  termSideN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upstream_speed" })
  upstreamSpeed?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__gt" })
  upstreamSpeedGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__gte" })
  upstreamSpeedGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__lt" })
  upstreamSpeedLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__lte" })
  upstreamSpeedLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upstream_speed__n" })
  upstreamSpeedN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id" })
  xconnectId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__ic" })
  xconnectIdIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__ie" })
  xconnectIdIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__iew" })
  xconnectIdIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__isw" })
  xconnectIdIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__n" })
  xconnectIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__nic" })
  xconnectIdNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__nie" })
  xconnectIdNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__niew" })
  xconnectIdNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id__nisw" })
  xconnectIdNisw?: string;
}


export class CircuitsCircuitTerminationsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CircuitsCircuitTerminationsListQueryParams;
}


export class CircuitsCircuitTerminationsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.CircuitTermination })
  results: shared.CircuitTermination[];
}


export class CircuitsCircuitTerminationsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  circuitsCircuitTerminationsList200ApplicationJsonObject?: CircuitsCircuitTerminationsList200ApplicationJson;
}
