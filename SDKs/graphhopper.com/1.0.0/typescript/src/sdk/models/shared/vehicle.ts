import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeWindowBreak } from "./timewindowbreak";
import { DriveTimeBreak } from "./drivetimebreak";
import { Address } from "./address";



export class Vehicle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=break" })
  break?: any;

  @SpeakeasyMetadata({ data: "json, name=earliest_start" })
  earliestStart?: number;

  @SpeakeasyMetadata({ data: "json, name=end_address" })
  endAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=latest_end" })
  latestEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=max_activities" })
  maxActivities?: number;

  @SpeakeasyMetadata({ data: "json, name=max_distance" })
  maxDistance?: number;

  @SpeakeasyMetadata({ data: "json, name=max_driving_time" })
  maxDrivingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=max_jobs" })
  maxJobs?: number;

  @SpeakeasyMetadata({ data: "json, name=min_jobs" })
  minJobs?: number;

  @SpeakeasyMetadata({ data: "json, name=move_to_end_address" })
  moveToEndAddress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=return_to_depot" })
  returnToDepot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skills" })
  skills?: string[];

  @SpeakeasyMetadata({ data: "json, name=start_address" })
  startAddress: Address;

  @SpeakeasyMetadata({ data: "json, name=type_id" })
  typeId?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicle_id" })
  vehicleId: string;
}
