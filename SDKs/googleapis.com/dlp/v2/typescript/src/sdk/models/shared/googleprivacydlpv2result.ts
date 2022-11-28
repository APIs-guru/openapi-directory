import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2HybridInspectStatistics } from "./googleprivacydlpv2hybridinspectstatistics";
import { GooglePrivacyDlpV2InfoTypeStats } from "./googleprivacydlpv2infotypestats";



// GooglePrivacyDlpV2Result
/** 
 * All result fields mentioned below are updated while the job is processing.
**/
export class GooglePrivacyDlpV2Result extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hybridStats" })
  hybridStats?: GooglePrivacyDlpV2HybridInspectStatistics;

  @SpeakeasyMetadata({ data: "json, name=infoTypeStats", elemType: GooglePrivacyDlpV2InfoTypeStats })
  infoTypeStats?: GooglePrivacyDlpV2InfoTypeStats[];

  @SpeakeasyMetadata({ data: "json, name=processedBytes" })
  processedBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=totalEstimatedBytes" })
  totalEstimatedBytes?: string;
}
