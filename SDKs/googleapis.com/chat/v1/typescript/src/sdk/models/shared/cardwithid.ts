import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1Card } from "./googleappscardv1card";


// CardWithId
/** 
 * Widgets for Chat apps to specify.
**/
export class CardWithId extends SpeakeasyBase {
  @Metadata({ data: "json, name=card" })
  card?: GoogleAppsCardV1Card;

  @Metadata({ data: "json, name=cardId" })
  cardId?: string;
}
