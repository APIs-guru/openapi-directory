import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MethodQuota
/** 
 * The quota information per method in the Content API.
**/
export class MethodQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaLimit" })
  quotaLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaUsage" })
  quotaUsage?: string;
}
