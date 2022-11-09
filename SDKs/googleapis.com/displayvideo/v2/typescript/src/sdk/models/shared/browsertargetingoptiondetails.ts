import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BrowserTargetingOptionDetails
/** 
 * Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`.
**/
export class BrowserTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
