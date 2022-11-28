import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchApplicationSessionStats } from "./searchapplicationsessionstats";



export class GetSearchApplicationSessionStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stats", elemType: SearchApplicationSessionStats })
  stats?: SearchApplicationSessionStats[];
}
