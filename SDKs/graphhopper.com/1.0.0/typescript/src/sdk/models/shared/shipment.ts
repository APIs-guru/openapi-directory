import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Stop } from "./stop";
import { Stop } from "./stop";


export class Shipment extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_vehicles" })
  allowedVehicles?: string[];

  @Metadata({ data: "json, name=delivery" })
  delivery: Stop;

  @Metadata({ data: "json, name=disallowed_vehicles" })
  disallowedVehicles?: string[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=max_time_in_vehicle" })
  maxTimeInVehicle?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pickup" })
  pickup: Stop;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=required_skills" })
  requiredSkills?: string[];

  @Metadata({ data: "json, name=size" })
  size?: number[];
}
