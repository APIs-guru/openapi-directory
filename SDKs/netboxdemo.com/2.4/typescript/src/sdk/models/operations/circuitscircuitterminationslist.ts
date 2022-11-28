import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsCircuitTerminationsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=circuit_id" })
  circuitId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=port_speed" })
  portSpeed?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term_side" })
  termSide?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upstream_speed" })
  upstreamSpeed?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id" })
  xconnectId?: string;
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
