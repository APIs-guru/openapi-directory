import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FindingTypeStats } from "./findingtypestats";


// ListFindingTypeStatsResponse
/** 
 * Response for the `ListFindingTypeStats` method.
**/
export class ListFindingTypeStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingTypeStats", elemType: shared.FindingTypeStats })
  findingTypeStats?: FindingTypeStats[];
}
