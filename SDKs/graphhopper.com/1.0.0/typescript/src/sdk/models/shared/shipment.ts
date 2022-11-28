import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stop } from "./stop";



export class Shipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_vehicles" })
  allowedVehicles?: string[];

  @SpeakeasyMetadata({ data: "json, name=delivery" })
  delivery: Stop;

  @SpeakeasyMetadata({ data: "json, name=disallowed_vehicles" })
  disallowedVehicles?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=max_time_in_vehicle" })
  maxTimeInVehicle?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pickup" })
  pickup: Stop;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=required_skills" })
  requiredSkills?: string[];

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number[];
}
