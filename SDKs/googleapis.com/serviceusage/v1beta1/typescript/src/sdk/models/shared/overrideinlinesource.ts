import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaOverride } from "./quotaoverride";



// OverrideInlineSource
/** 
 * Import data embedded in the request message
**/
export class OverrideInlineSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overrides", elemType: QuotaOverride })
  overrides?: QuotaOverride[];
}
