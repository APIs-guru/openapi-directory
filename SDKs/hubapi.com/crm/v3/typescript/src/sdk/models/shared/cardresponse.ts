import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBody } from "./cardfetchbody";



// CardResponse
/** 
 * Current state of Card Definition
**/
export class CardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions: CardActions;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=display" })
  display: CardDisplayBody;

  @SpeakeasyMetadata({ data: "json, name=fetch" })
  fetch: CardFetchBody;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
