import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchResponse
/** 
 * Response message includes the context and a list of matching results which contain the detail of associated entities.
**/
export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@context" })
  atContext?: any;

  @SpeakeasyMetadata({ data: "json, name=@type" })
  atType?: any;

  @SpeakeasyMetadata({ data: "json, name=itemListElement" })
  itemListElement?: any[];
}
