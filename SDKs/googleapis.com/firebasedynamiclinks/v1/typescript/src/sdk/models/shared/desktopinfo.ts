import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DesktopInfo
/** 
 * Desktop related attributes to the Dynamic Link.
**/
export class DesktopInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desktopFallbackLink" })
  desktopFallbackLink?: string;
}
