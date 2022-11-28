import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DisplayOptionTypeEnum {
    Default = "DEFAULT",
    Success = "SUCCESS",
    Warning = "WARNING",
    Danger = "DANGER",
    Info = "INFO"
}


// DisplayOption
/** 
 * Option definition for STATUS dataTypes.
**/
export class DisplayOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: DisplayOptionTypeEnum;
}
