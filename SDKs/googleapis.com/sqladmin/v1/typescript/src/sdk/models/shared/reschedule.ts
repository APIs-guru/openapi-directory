import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RescheduleRescheduleTypeEnum {
    RescheduleTypeUnspecified = "RESCHEDULE_TYPE_UNSPECIFIED",
    Immediate = "IMMEDIATE",
    NextAvailableWindow = "NEXT_AVAILABLE_WINDOW",
    SpecificTime = "SPECIFIC_TIME"
}


export class Reschedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rescheduleType" })
  rescheduleType?: RescheduleRescheduleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
