import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StageReference } from "./stagereference";



export class StageReferenceSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: StageReference })
  items?: StageReference[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
