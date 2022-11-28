import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NavigationInfo
/** 
 * Information of navigation behavior.
**/
export class NavigationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableForcedRedirect" })
  enableForcedRedirect?: boolean;
}
