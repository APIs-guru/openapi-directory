import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExitEventTypeEnum {
    ExitEventTypeUnspecified = "EXIT_EVENT_TYPE_UNSPECIFIED"
,    ExitEventTypeDefault = "EXIT_EVENT_TYPE_DEFAULT"
,    ExitEventTypeBackup = "EXIT_EVENT_TYPE_BACKUP"
}


// ExitEvent
/** 
 * Exit event of the creative.
**/
export class ExitEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reportingName" })
  reportingName?: string;

  @Metadata({ data: "json, name=type" })
  type?: ExitEventTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
