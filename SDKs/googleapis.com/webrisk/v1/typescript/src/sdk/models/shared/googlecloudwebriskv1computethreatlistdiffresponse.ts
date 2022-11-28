import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1ThreatEntryAdditions } from "./googlecloudwebriskv1threatentryadditions";
import { GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum } from "./googlecloudwebriskv1computethreatlistdiffresponsechecksum";
import { GoogleCloudWebriskV1ThreatEntryRemovals } from "./googlecloudwebriskv1threatentryremovals";


export enum GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    Diff = "DIFF",
    Reset = "RESET"
}


export class GoogleCloudWebriskV1ComputeThreatListDiffResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additions" })
  additions?: GoogleCloudWebriskV1ThreatEntryAdditions;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum;

  @SpeakeasyMetadata({ data: "json, name=newVersionToken" })
  newVersionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendedNextDiff" })
  recommendedNextDiff?: string;

  @SpeakeasyMetadata({ data: "json, name=removals" })
  removals?: GoogleCloudWebriskV1ThreatEntryRemovals;

  @SpeakeasyMetadata({ data: "json, name=responseType" })
  responseType?: GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum;
}
