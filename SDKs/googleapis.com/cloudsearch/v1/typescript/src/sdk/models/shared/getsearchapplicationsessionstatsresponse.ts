import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchApplicationSessionStats } from "./searchapplicationsessionstats";


export class GetSearchApplicationSessionStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=stats", elemType: shared.SearchApplicationSessionStats })
  stats?: SearchApplicationSessionStats[];
}
