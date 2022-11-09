import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";

export enum RouteRequestAlgorithmEnum {
    RoundTrip = "round_trip"
,    AlternativeRoute = "alternative_route"
}

export enum RouteRequestCurbsidesEnum {
    Any = "any"
,    Right = "right"
,    Left = "left"
}


export class RouteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: RouteRequestAlgorithmEnum;

  @Metadata({ data: "json, name=alternative_route.max_paths" })
  alternativeRouteMaxPaths?: number;

  @Metadata({ data: "json, name=alternative_route.max_share_factor" })
  alternativeRouteMaxShareFactor?: number;

  @Metadata({ data: "json, name=alternative_route.max_weight_factor" })
  alternativeRouteMaxWeightFactor?: number;

  @Metadata({ data: "json, name=avoid" })
  avoid?: string;

  @Metadata({ data: "json, name=block_area" })
  blockArea?: string;

  @Metadata({ data: "json, name=calc_points" })
  calcPoints?: boolean;

  @Metadata({ data: "json, name=ch.disable" })
  chDisable?: boolean;

  @Metadata({ data: "json, name=curbsides" })
  curbsides?: RouteRequestCurbsidesEnum[];

  @Metadata({ data: "json, name=debug" })
  debug?: boolean;

  @Metadata({ data: "json, name=details" })
  details?: string[];

  @Metadata({ data: "json, name=elevation" })
  elevation?: boolean;

  @Metadata({ data: "json, name=heading_penalty" })
  headingPenalty?: number;

  @Metadata({ data: "json, name=headings" })
  headings?: number[];

  @Metadata({ data: "json, name=instructions" })
  instructions?: boolean;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=optimize" })
  optimize?: string;

  @Metadata({ data: "json, name=pass_through" })
  passThrough?: boolean;

  @Metadata({ data: "json, name=point_hints" })
  pointHints?: string[];

  @Metadata({ data: "json, name=points" })
  points?: number[][];

  @Metadata({ data: "json, name=points_encoded" })
  pointsEncoded?: boolean;

  @Metadata({ data: "json, name=round_trip.distance" })
  roundTripDistance?: number;

  @Metadata({ data: "json, name=round_trip.seed" })
  roundTripSeed?: number;

  @Metadata({ data: "json, name=snap_preventions" })
  snapPreventions?: string[];

  @Metadata({ data: "json, name=vehicle" })
  vehicle?: VehicleProfileIdEnum;

  @Metadata({ data: "json, name=weighting" })
  weighting?: string;
}
