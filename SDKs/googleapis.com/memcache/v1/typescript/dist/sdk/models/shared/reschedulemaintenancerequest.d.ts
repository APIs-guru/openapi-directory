import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RescheduleMaintenanceRequestRescheduleTypeEnum {
    RescheduleTypeUnspecified = "RESCHEDULE_TYPE_UNSPECIFIED",
    Immediate = "IMMEDIATE",
    NextAvailableWindow = "NEXT_AVAILABLE_WINDOW",
    SpecificTime = "SPECIFIC_TIME"
}
/**
 * Request for RescheduleMaintenance.
**/
export declare class RescheduleMaintenanceRequest extends SpeakeasyBase {
    rescheduleType?: RescheduleMaintenanceRequestRescheduleTypeEnum;
    scheduleTime?: string;
}
