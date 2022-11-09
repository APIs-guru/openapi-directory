import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRouteAlgorithmEnum {
    RoundTrip = "round_trip"
,    AlternativeRoute = "alternative_route"
}

export enum GetRouteCurbsideEnum {
    Any = "any"
,    Right = "right"
,    Left = "left"
}


export class GetRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=algorithm" })
  algorithm?: GetRouteAlgorithmEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alternative_route.max_paths" })
  alternativeRouteMaxPaths?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alternative_route.max_share_factor" })
  alternativeRouteMaxShareFactor?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alternative_route.max_weight_factor" })
  alternativeRouteMaxWeightFactor?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=avoid" })
  avoid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=block_area" })
  blockArea?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=calc_points" })
  calcPoints?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ch.disable" })
  chDisable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=curbside" })
  curbside?: GetRouteCurbsideEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=details" })
  details?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=elevation" })
  elevation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=heading" })
  heading?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=heading_penalty" })
  headingPenalty?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=instructions" })
  instructions?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=optimize" })
  optimize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pass_through" })
  passThrough?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=point_hint" })
  pointHint?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=points_encoded" })
  pointsEncoded?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=round_trip.distance" })
  roundTripDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=round_trip.seed" })
  roundTripSeed?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=snap_prevention" })
  snapPrevention?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=turn_costs" })
  turnCosts?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicle" })
  vehicle?: shared.VehicleProfileIdEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weighting" })
  weighting?: string;
}


export class GetRouteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRouteQueryParams;
}


export class GetRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ghError?: shared.GhError;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  routeResponse?: shared.RouteResponse;

  @Metadata()
  statusCode: number;
}
