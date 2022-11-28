import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RescheduleRescheduleTypeEnum {
    RescheduleTypeUnspecified = "RESCHEDULE_TYPE_UNSPECIFIED",
    Immediate = "IMMEDIATE",
    NextAvailableWindow = "NEXT_AVAILABLE_WINDOW",
    SpecificTime = "SPECIFIC_TIME"
}
export declare class Reschedule extends SpeakeasyBase {
    rescheduleType?: RescheduleRescheduleTypeEnum;
    scheduleTime?: string;
}
