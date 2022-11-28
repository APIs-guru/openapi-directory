import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { RoutePoint } from "./routepoint";



export class Route extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: Activity })
  activities?: Activity[];

  @SpeakeasyMetadata({ data: "json, name=completion_time" })
  completionTime?: number;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=points", elemType: RoutePoint })
  points?: RoutePoint[];

  @SpeakeasyMetadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=service_duration" })
  serviceDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=transport_time" })
  transportTime?: number;

  @SpeakeasyMetadata({ data: "json, name=vehicle_id" })
  vehicleId?: string;

  @SpeakeasyMetadata({ data: "json, name=waiting_time" })
  waitingTime?: number;
}
