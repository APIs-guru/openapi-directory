import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DisplayOptionTypeEnum {
    Default = "DEFAULT"
,    Success = "SUCCESS"
,    Warning = "WARNING"
,    Danger = "DANGER"
,    Info = "INFO"
}


// DisplayOption
/** 
 * Option definition for STATUS dataTypes.
**/
export class DisplayOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: DisplayOptionTypeEnum;
}
