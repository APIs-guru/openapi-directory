import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BrowserTargetingOptionDetails
/** 
 * Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`.
**/
export class BrowserTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
