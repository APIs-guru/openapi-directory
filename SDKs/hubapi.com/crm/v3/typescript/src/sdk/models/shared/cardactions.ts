import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CardActions
/** 
 * Configuration for custom user actions on cards.
**/
export class CardActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseUrls" })
  baseUrls: string[];
}
