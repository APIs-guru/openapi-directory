import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TargetWindowTargetWindowOptionEnum {
    NewWindow = "NEW_WINDOW"
,    CurrentWindow = "CURRENT_WINDOW"
,    Custom = "CUSTOM"
}


// TargetWindow
/** 
 * Target Window.
**/
export class TargetWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=customHtml" })
  customHtml?: string;

  @Metadata({ data: "json, name=targetWindowOption" })
  targetWindowOption?: TargetWindowTargetWindowOptionEnum;
}
