import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WarningPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Alert = "ALERT"
}


// Warning
/** 
 * A non-fatal problem encountered during the execution of the build.
**/
export class Warning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: WarningPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
