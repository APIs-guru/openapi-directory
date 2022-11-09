import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuotaOverride } from "./quotaoverride";


// ListConsumerOverridesResponse
/** 
 * Response message for ListConsumerOverrides.
**/
export class ListConsumerOverridesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=overrides", elemType: shared.QuotaOverride })
  overrides?: QuotaOverride[];
}
