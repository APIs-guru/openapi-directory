import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StageSummary } from "./stagesummary";



export class StageSummarySearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: StageSummary })
  items?: StageSummary[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
