import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RouteResponsePathInstructions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=exit_number" })
  exitNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: number[];

  @SpeakeasyMetadata({ data: "json, name=sign" })
  sign?: number;

  @SpeakeasyMetadata({ data: "json, name=street_name" })
  streetName?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=turn_angle" })
  turnAngle?: number;
}


export class RouteResponsePath extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ascend" })
  ascend?: number;

  @SpeakeasyMetadata({ data: "json, name=bbox" })
  bbox?: number[];

  @SpeakeasyMetadata({ data: "json, name=descend" })
  descend?: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=instructions", elemType: RouteResponsePathInstructions })
  instructions?: RouteResponsePathInstructions[];

  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=points_encoded" })
  pointsEncoded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=points_order" })
  pointsOrder?: number[];

  @SpeakeasyMetadata({ data: "json, name=snapped_waypoints" })
  snappedWaypoints?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;
}
