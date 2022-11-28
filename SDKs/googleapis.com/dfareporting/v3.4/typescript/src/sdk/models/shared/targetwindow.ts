import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TargetWindowTargetWindowOptionEnum {
    NewWindow = "NEW_WINDOW",
    CurrentWindow = "CURRENT_WINDOW",
    Custom = "CUSTOM"
}


// TargetWindow
/** 
 * Target Window.
**/
export class TargetWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customHtml" })
  customHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=targetWindowOption" })
  targetWindowOption?: TargetWindowTargetWindowOptionEnum;
}
