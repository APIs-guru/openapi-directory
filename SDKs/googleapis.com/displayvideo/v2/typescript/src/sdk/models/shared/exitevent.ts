import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExitEventTypeEnum {
    ExitEventTypeUnspecified = "EXIT_EVENT_TYPE_UNSPECIFIED",
    ExitEventTypeDefault = "EXIT_EVENT_TYPE_DEFAULT",
    ExitEventTypeBackup = "EXIT_EVENT_TYPE_BACKUP"
}


// ExitEvent
/** 
 * Exit event of the creative.
**/
export class ExitEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingName" })
  reportingName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ExitEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
