import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RouteResponsePathInstructions extends SpeakeasyBase {
  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=exit_number" })
  exitNumber?: number;

  @Metadata({ data: "json, name=interval" })
  interval?: number[];

  @Metadata({ data: "json, name=sign" })
  sign?: number;

  @Metadata({ data: "json, name=street_name" })
  streetName?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=turn_angle" })
  turnAngle?: number;
}


export class RouteResponsePath extends SpeakeasyBase {
  @Metadata({ data: "json, name=ascend" })
  ascend?: number;

  @Metadata({ data: "json, name=bbox" })
  bbox?: number[];

  @Metadata({ data: "json, name=descend" })
  descend?: number;

  @Metadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=instructions", elemType: shared.RouteResponsePathInstructions })
  instructions?: RouteResponsePathInstructions[];

  @Metadata({ data: "json, name=points" })
  points?: Map<string, any>;

  @Metadata({ data: "json, name=points_encoded" })
  pointsEncoded?: boolean;

  @Metadata({ data: "json, name=points_order" })
  pointsOrder?: number[];

  @Metadata({ data: "json, name=snapped_waypoints" })
  snappedWaypoints?: Map<string, any>;

  @Metadata({ data: "json, name=time" })
  time?: number;
}
