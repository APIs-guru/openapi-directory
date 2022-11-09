import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBody } from "./cardfetchbody";


// CardResponse
/** 
 * Current state of Card Definition
**/
export class CardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions: CardActions;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=display" })
  display: CardDisplayBody;

  @Metadata({ data: "json, name=fetch" })
  fetch: CardFetchBody;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
