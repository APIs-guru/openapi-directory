import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Activity } from "./activity";
import { RoutePoint } from "./routepoint";


export class Route extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities", elemType: shared.Activity })
  activities?: Activity[];

  @Metadata({ data: "json, name=completion_time" })
  completionTime?: number;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=points", elemType: shared.RoutePoint })
  points?: RoutePoint[];

  @Metadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @Metadata({ data: "json, name=service_duration" })
  serviceDuration?: number;

  @Metadata({ data: "json, name=transport_time" })
  transportTime?: number;

  @Metadata({ data: "json, name=vehicle_id" })
  vehicleId?: string;

  @Metadata({ data: "json, name=waiting_time" })
  waitingTime?: number;
}
