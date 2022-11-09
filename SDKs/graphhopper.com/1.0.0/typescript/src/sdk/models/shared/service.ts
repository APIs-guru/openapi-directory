import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { TimeWindow } from "./timewindow";

export enum ServiceTypeEnum {
    Service = "service"
,    Pickup = "pickup"
,    Delivery = "delivery"
}


export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=allowed_vehicles" })
  allowedVehicles?: string[];

  @Metadata({ data: "json, name=disallowed_vehicles" })
  disallowedVehicles?: string[];

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=max_time_in_vehicle" })
  maxTimeInVehicle?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=required_skills" })
  requiredSkills?: string[];

  @Metadata({ data: "json, name=size" })
  size?: number[];

  @Metadata({ data: "json, name=time_windows", elemType: shared.TimeWindow })
  timeWindows?: TimeWindow[];

  @Metadata({ data: "json, name=type" })
  type?: ServiceTypeEnum;
}
