import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NavigationInfo
/** 
 * Information of navigation behavior.
**/
export class NavigationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableForcedRedirect" })
  enableForcedRedirect?: boolean;
}
