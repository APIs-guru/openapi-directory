import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RescheduleRescheduleTypeEnum {
    RescheduleTypeUnspecified = "RESCHEDULE_TYPE_UNSPECIFIED"
,    Immediate = "IMMEDIATE"
,    NextAvailableWindow = "NEXT_AVAILABLE_WINDOW"
,    SpecificTime = "SPECIFIC_TIME"
}


export class Reschedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=rescheduleType" })
  rescheduleType?: RescheduleRescheduleTypeEnum;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
