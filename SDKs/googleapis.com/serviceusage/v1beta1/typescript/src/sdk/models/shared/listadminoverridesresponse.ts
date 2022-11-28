import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaOverride } from "./quotaoverride";



// ListAdminOverridesResponse
/** 
 * Response message for ListAdminOverrides.
**/
export class ListAdminOverridesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=overrides", elemType: QuotaOverride })
  overrides?: QuotaOverride[];
}
