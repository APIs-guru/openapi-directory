import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";


export enum RouteRequestAlgorithmEnum {
    RoundTrip = "round_trip",
    AlternativeRoute = "alternative_route"
}

export enum RouteRequestCurbsidesEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}


export class RouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: RouteRequestAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=alternative_route.max_paths" })
  alternativeRouteMaxPaths?: number;

  @SpeakeasyMetadata({ data: "json, name=alternative_route.max_share_factor" })
  alternativeRouteMaxShareFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=alternative_route.max_weight_factor" })
  alternativeRouteMaxWeightFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=avoid" })
  avoid?: string;

  @SpeakeasyMetadata({ data: "json, name=block_area" })
  blockArea?: string;

  @SpeakeasyMetadata({ data: "json, name=calc_points" })
  calcPoints?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ch.disable" })
  chDisable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=curbsides" })
  curbsides?: RouteRequestCurbsidesEnum[];

  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: boolean;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string[];

  @SpeakeasyMetadata({ data: "json, name=elevation" })
  elevation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=heading_penalty" })
  headingPenalty?: number;

  @SpeakeasyMetadata({ data: "json, name=headings" })
  headings?: number[];

  @SpeakeasyMetadata({ data: "json, name=instructions" })
  instructions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=optimize" })
  optimize?: string;

  @SpeakeasyMetadata({ data: "json, name=pass_through" })
  passThrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=point_hints" })
  pointHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: number[][];

  @SpeakeasyMetadata({ data: "json, name=points_encoded" })
  pointsEncoded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=round_trip.distance" })
  roundTripDistance?: number;

  @SpeakeasyMetadata({ data: "json, name=round_trip.seed" })
  roundTripSeed?: number;

  @SpeakeasyMetadata({ data: "json, name=snap_preventions" })
  snapPreventions?: string[];

  @SpeakeasyMetadata({ data: "json, name=vehicle" })
  vehicle?: VehicleProfileIdEnum;

  @SpeakeasyMetadata({ data: "json, name=weighting" })
  weighting?: string;
}
