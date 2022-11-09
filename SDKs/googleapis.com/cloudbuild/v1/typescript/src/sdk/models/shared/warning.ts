import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WarningPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED"
,    Info = "INFO"
,    Warning = "WARNING"
,    Alert = "ALERT"
}


// Warning
/** 
 * A non-fatal problem encountered during the execution of the build.
**/
export class Warning extends SpeakeasyBase {
  @Metadata({ data: "json, name=priority" })
  priority?: WarningPriorityEnum;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
