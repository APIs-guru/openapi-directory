import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingTypeStats } from "./findingtypestats";



// ListFindingTypeStatsResponse
/** 
 * Response for the `ListFindingTypeStats` method.
**/
export class ListFindingTypeStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingTypeStats", elemType: FindingTypeStats })
  findingTypeStats?: FindingTypeStats[];
}
