import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchResponse
/** 
 * Response message includes the context and a list of matching results which contain the detail of associated entities.
**/
export class SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=@context" })
  atContext?: any;

  @Metadata({ data: "json, name=@type" })
  atType?: any;

  @Metadata({ data: "json, name=itemListElement" })
  itemListElement?: any[];
}
