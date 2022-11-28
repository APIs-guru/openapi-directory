import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetRouteAlgorithmEnum {
    RoundTrip = "round_trip",
    AlternativeRoute = "alternative_route"
}

export enum GetRouteCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}


export class GetRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=algorithm" })
  algorithm?: GetRouteAlgorithmEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternative_route.max_paths" })
  alternativeRouteMaxPaths?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternative_route.max_share_factor" })
  alternativeRouteMaxShareFactor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternative_route.max_weight_factor" })
  alternativeRouteMaxWeightFactor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=avoid" })
  avoid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=block_area" })
  blockArea?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=calc_points" })
  calcPoints?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ch.disable" })
  chDisable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=curbside" })
  curbside?: GetRouteCurbsideEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=details" })
  details?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=elevation" })
  elevation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=heading" })
  heading?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=heading_penalty" })
  headingPenalty?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instructions" })
  instructions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=optimize" })
  optimize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pass_through" })
  passThrough?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point_hint" })
  pointHint?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points_encoded" })
  pointsEncoded?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=round_trip.distance" })
  roundTripDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=round_trip.seed" })
  roundTripSeed?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=snap_prevention" })
  snapPrevention?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=turn_costs" })
  turnCosts?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle" })
  vehicle?: shared.VehicleProfileIdEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weighting" })
  weighting?: string;
}


export class GetRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRouteQueryParams;
}


export class GetRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ghError?: shared.GhError;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  routeResponse?: shared.RouteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
