import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";


// GoogleAppsCardV1CardFixedFooter
/** 
 * A persistent (sticky) footer that is added to the bottom of the card.
**/
export class GoogleAppsCardV1CardFixedFooter extends SpeakeasyBase {
  @Metadata({ data: "json, name=primaryButton" })
  primaryButton?: GoogleAppsCardV1Button;

  @Metadata({ data: "json, name=secondaryButton" })
  secondaryButton?: GoogleAppsCardV1Button;
}
