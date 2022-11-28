import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBody } from "./cardfetchbody";



// CardCreateRequest
/** 
 * State of card definition to be created
**/
export class CardCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions: CardActions;

  @SpeakeasyMetadata({ data: "json, name=display" })
  display: CardDisplayBody;

  @SpeakeasyMetadata({ data: "json, name=fetch" })
  fetch: CardFetchBody;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
