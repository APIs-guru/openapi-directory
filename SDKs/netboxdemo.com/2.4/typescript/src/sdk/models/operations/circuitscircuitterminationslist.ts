import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTerminationsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=circuit_id" })
  circuitId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=port_speed" })
  portSpeed?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=term_side" })
  termSide?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upstream_speed" })
  upstreamSpeed?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xconnect_id" })
  xconnectId?: string;
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
