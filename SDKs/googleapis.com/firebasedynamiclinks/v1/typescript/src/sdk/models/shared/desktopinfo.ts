import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DesktopInfo
/** 
 * Desktop related attributes to the Dynamic Link.
**/
export class DesktopInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=desktopFallbackLink" })
  desktopFallbackLink?: string;
}
