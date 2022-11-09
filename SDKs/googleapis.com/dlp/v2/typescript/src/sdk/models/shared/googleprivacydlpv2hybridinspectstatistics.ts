import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2HybridInspectStatistics
/** 
 * Statistics related to processing hybrid inspect requests.
**/
export class GooglePrivacyDlpV2HybridInspectStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortedCount" })
  abortedCount?: string;

  @Metadata({ data: "json, name=pendingCount" })
  pendingCount?: string;

  @Metadata({ data: "json, name=processedCount" })
  processedCount?: string;
}
