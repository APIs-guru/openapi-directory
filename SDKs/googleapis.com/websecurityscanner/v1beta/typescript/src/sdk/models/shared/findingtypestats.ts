import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FindingTypeStats
/** 
 * A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.
**/
export class FindingTypeStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingCount" })
  findingCount?: number;

  @Metadata({ data: "json, name=findingType" })
  findingType?: string;
}
