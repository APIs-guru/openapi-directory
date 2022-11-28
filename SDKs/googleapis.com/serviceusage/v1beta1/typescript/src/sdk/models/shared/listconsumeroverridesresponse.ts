import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaOverride } from "./quotaoverride";



// ListConsumerOverridesResponse
/** 
 * Response message for ListConsumerOverrides.
**/
export class ListConsumerOverridesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=overrides", elemType: QuotaOverride })
  overrides?: QuotaOverride[];
}
