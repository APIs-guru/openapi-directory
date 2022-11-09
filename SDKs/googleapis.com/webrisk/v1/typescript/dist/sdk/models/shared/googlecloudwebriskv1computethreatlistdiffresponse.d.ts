import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudWebriskV1ThreatEntryAdditions } from "./googlecloudwebriskv1threatentryadditions";
import { GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum } from "./googlecloudwebriskv1computethreatlistdiffresponsechecksum";
import { GoogleCloudWebriskV1ThreatEntryRemovals } from "./googlecloudwebriskv1threatentryremovals";
export declare enum GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    Diff = "DIFF",
    Reset = "RESET"
}
export declare class GoogleCloudWebriskV1ComputeThreatListDiffResponse extends SpeakeasyBase {
    additions?: GoogleCloudWebriskV1ThreatEntryAdditions;
    checksum?: GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum;
    newVersionToken?: string;
    recommendedNextDiff?: string;
    removals?: GoogleCloudWebriskV1ThreatEntryRemovals;
    responseType?: GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum;
}
