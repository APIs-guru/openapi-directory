import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsCardV1OpenLinkOnCloseEnum {
    Nothing = "NOTHING"
,    Reload = "RELOAD"
}

export enum GoogleAppsCardV1OpenLinkOpenAsEnum {
    FullSize = "FULL_SIZE"
,    Overlay = "OVERLAY"
}


// GoogleAppsCardV1OpenLink
/** 
 * Represents an `onClick` event that opens a hyperlink.
**/
export class GoogleAppsCardV1OpenLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=onClose" })
  onClose?: GoogleAppsCardV1OpenLinkOnCloseEnum;

  @Metadata({ data: "json, name=openAs" })
  openAs?: GoogleAppsCardV1OpenLinkOpenAsEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
