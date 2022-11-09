import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2HybridInspectStatistics } from "./googleprivacydlpv2hybridinspectstatistics";
import { GooglePrivacyDlpV2InfoTypeStats } from "./googleprivacydlpv2infotypestats";


// GooglePrivacyDlpV2Result
/** 
 * All result fields mentioned below are updated while the job is processing.
**/
export class GooglePrivacyDlpV2Result extends SpeakeasyBase {
  @Metadata({ data: "json, name=hybridStats" })
  hybridStats?: GooglePrivacyDlpV2HybridInspectStatistics;

  @Metadata({ data: "json, name=infoTypeStats", elemType: shared.GooglePrivacyDlpV2InfoTypeStats })
  infoTypeStats?: GooglePrivacyDlpV2InfoTypeStats[];

  @Metadata({ data: "json, name=processedBytes" })
  processedBytes?: string;

  @Metadata({ data: "json, name=totalEstimatedBytes" })
  totalEstimatedBytes?: string;
}
