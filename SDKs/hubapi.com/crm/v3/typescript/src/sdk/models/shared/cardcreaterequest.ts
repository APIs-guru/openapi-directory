import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBody } from "./cardfetchbody";


// CardCreateRequest
/** 
 * State of card definition to be created
**/
export class CardCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions: CardActions;

  @Metadata({ data: "json, name=display" })
  display: CardDisplayBody;

  @Metadata({ data: "json, name=fetch" })
  fetch: CardFetchBody;

  @Metadata({ data: "json, name=title" })
  title: string;
}
