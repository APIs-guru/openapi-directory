import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FindingTypeStats
/** 
 * A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.
**/
export class FindingTypeStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingCount" })
  findingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=findingType" })
  findingType?: string;
}
