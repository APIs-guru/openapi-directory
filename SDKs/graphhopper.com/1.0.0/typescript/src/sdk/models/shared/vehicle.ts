import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeWindowBreak } from "./timewindowbreak";
import { DriveTimeBreak } from "./drivetimebreak";
import { Address } from "./address";
import { Address } from "./address";


export class Vehicle extends SpeakeasyBase {
  @Metadata({ data: "json, name=break" })
  break?: any;

  @Metadata({ data: "json, name=earliest_start" })
  earliestStart?: number;

  @Metadata({ data: "json, name=end_address" })
  endAddress?: Address;

  @Metadata({ data: "json, name=latest_end" })
  latestEnd?: number;

  @Metadata({ data: "json, name=max_activities" })
  maxActivities?: number;

  @Metadata({ data: "json, name=max_distance" })
  maxDistance?: number;

  @Metadata({ data: "json, name=max_driving_time" })
  maxDrivingTime?: number;

  @Metadata({ data: "json, name=max_jobs" })
  maxJobs?: number;

  @Metadata({ data: "json, name=min_jobs" })
  minJobs?: number;

  @Metadata({ data: "json, name=move_to_end_address" })
  moveToEndAddress?: boolean;

  @Metadata({ data: "json, name=return_to_depot" })
  returnToDepot?: boolean;

  @Metadata({ data: "json, name=skills" })
  skills?: string[];

  @Metadata({ data: "json, name=start_address" })
  startAddress: Address;

  @Metadata({ data: "json, name=type_id" })
  typeId?: string;

  @Metadata({ data: "json, name=vehicle_id" })
  vehicleId: string;
}
