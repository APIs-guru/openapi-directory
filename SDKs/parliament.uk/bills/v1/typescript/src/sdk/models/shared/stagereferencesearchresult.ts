import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StageReference } from "./stagereference";


export class StageReferenceSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.StageReference })
  items?: StageReference[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
