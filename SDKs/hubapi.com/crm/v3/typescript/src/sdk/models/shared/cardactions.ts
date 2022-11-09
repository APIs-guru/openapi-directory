import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CardActions
/** 
 * Configuration for custom user actions on cards.
**/
export class CardActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseUrls" })
  baseUrls: string[];
}
