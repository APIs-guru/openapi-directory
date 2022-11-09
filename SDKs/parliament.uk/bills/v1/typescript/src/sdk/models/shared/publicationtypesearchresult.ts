import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublicationType } from "./publicationtype";


export class PublicationTypeSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PublicationType })
  items?: PublicationType[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
