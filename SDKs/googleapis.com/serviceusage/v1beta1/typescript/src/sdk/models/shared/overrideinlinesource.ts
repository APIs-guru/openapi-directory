import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuotaOverride } from "./quotaoverride";


// OverrideInlineSource
/** 
 * Import data embedded in the request message
**/
export class OverrideInlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=overrides", elemType: shared.QuotaOverride })
  overrides?: QuotaOverride[];
}
