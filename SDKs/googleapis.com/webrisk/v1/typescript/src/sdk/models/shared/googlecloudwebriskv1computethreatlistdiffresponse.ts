import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudWebriskV1ThreatEntryAdditions } from "./googlecloudwebriskv1threatentryadditions";
import { GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum } from "./googlecloudwebriskv1computethreatlistdiffresponsechecksum";
import { GoogleCloudWebriskV1ThreatEntryRemovals } from "./googlecloudwebriskv1threatentryremovals";

export enum GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED"
,    Diff = "DIFF"
,    Reset = "RESET"
}


export class GoogleCloudWebriskV1ComputeThreatListDiffResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=additions" })
  additions?: GoogleCloudWebriskV1ThreatEntryAdditions;

  @Metadata({ data: "json, name=checksum" })
  checksum?: GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum;

  @Metadata({ data: "json, name=newVersionToken" })
  newVersionToken?: string;

  @Metadata({ data: "json, name=recommendedNextDiff" })
  recommendedNextDiff?: string;

  @Metadata({ data: "json, name=removals" })
  removals?: GoogleCloudWebriskV1ThreatEntryRemovals;

  @Metadata({ data: "json, name=responseType" })
  responseType?: GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum;
}
