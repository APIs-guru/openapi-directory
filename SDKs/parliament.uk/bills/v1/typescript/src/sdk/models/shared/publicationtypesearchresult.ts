import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicationType } from "./publicationtype";



export class PublicationTypeSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PublicationType })
  items?: PublicationType[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
