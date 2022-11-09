import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RescheduleMaintenanceRequestRescheduleTypeEnum {
    RescheduleTypeUnspecified = "RESCHEDULE_TYPE_UNSPECIFIED"
,    Immediate = "IMMEDIATE"
,    NextAvailableWindow = "NEXT_AVAILABLE_WINDOW"
,    SpecificTime = "SPECIFIC_TIME"
}


// RescheduleMaintenanceRequest
/** 
 * Request for RescheduleMaintenance.
**/
export class RescheduleMaintenanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=rescheduleType" })
  rescheduleType?: RescheduleMaintenanceRequestRescheduleTypeEnum;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
