import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Card } from "./googleappscardv1card";



// CardWithId
/** 
 * Widgets for Chat apps to specify.
**/
export class CardWithId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: GoogleAppsCardV1Card;

  @SpeakeasyMetadata({ data: "json, name=cardId" })
  cardId?: string;
}
