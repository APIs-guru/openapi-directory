import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsCardV1OpenLinkOnCloseEnum {
    Nothing = "NOTHING",
    Reload = "RELOAD"
}
export declare enum GoogleAppsCardV1OpenLinkOpenAsEnum {
    FullSize = "FULL_SIZE",
    Overlay = "OVERLAY"
}
/**
 * Represents an `onClick` event that opens a hyperlink.
**/
export declare class GoogleAppsCardV1OpenLink extends SpeakeasyBase {
    onClose?: GoogleAppsCardV1OpenLinkOnCloseEnum;
    openAs?: GoogleAppsCardV1OpenLinkOpenAsEnum;
    url?: string;
}
