import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { TimeWindow } from "./timewindow";


export enum ServiceTypeEnum {
    Service = "service",
    Pickup = "pickup",
    Delivery = "delivery"
}


export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=allowed_vehicles" })
  allowedVehicles?: string[];

  @SpeakeasyMetadata({ data: "json, name=disallowed_vehicles" })
  disallowedVehicles?: string[];

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=max_time_in_vehicle" })
  maxTimeInVehicle?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=required_skills" })
  requiredSkills?: string[];

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number[];

  @SpeakeasyMetadata({ data: "json, name=time_windows", elemType: TimeWindow })
  timeWindows?: TimeWindow[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ServiceTypeEnum;
}
