import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StageSummary } from "./stagesummary";


export class StageSummarySearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.StageSummary })
  items?: StageSummary[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
