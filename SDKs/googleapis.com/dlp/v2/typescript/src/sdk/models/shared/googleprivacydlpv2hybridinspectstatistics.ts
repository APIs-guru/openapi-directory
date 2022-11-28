import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2HybridInspectStatistics
/** 
 * Statistics related to processing hybrid inspect requests.
**/
export class GooglePrivacyDlpV2HybridInspectStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortedCount" })
  abortedCount?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingCount" })
  pendingCount?: string;

  @SpeakeasyMetadata({ data: "json, name=processedCount" })
  processedCount?: string;
}
