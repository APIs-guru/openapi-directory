import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TargetWindowTargetWindowOptionEnum {
    NewWindow = "NEW_WINDOW",
    CurrentWindow = "CURRENT_WINDOW",
    Custom = "CUSTOM"
}
/**
 * Target Window.
**/
export declare class TargetWindow extends SpeakeasyBase {
    customHtml?: string;
    targetWindowOption?: TargetWindowTargetWindowOptionEnum;
}
