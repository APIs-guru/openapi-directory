import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RescheduleMaintenanceRequestRescheduleTypeEnum {
    RescheduleTypeUnspecified = "RESCHEDULE_TYPE_UNSPECIFIED",
    Immediate = "IMMEDIATE",
    NextAvailableWindow = "NEXT_AVAILABLE_WINDOW",
    SpecificTime = "SPECIFIC_TIME"
}


// RescheduleMaintenanceRequest
/** 
 * Request for RescheduleMaintenance.
**/
export class RescheduleMaintenanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rescheduleType" })
  rescheduleType?: RescheduleMaintenanceRequestRescheduleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
