import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2HybridInspectStatistics } from "./googleprivacydlpv2hybridinspectstatistics";
import { GooglePrivacyDlpV2InfoTypeStats } from "./googleprivacydlpv2infotypestats";
/**
 * All result fields mentioned below are updated while the job is processing.
**/
export declare class GooglePrivacyDlpV2Result extends SpeakeasyBase {
    hybridStats?: GooglePrivacyDlpV2HybridInspectStatistics;
    infoTypeStats?: GooglePrivacyDlpV2InfoTypeStats[];
    processedBytes?: string;
    totalEstimatedBytes?: string;
}
