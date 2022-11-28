import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartActivityIntent
/** 
 * A starting intent specified by an action, uri, and categories.
**/
export class StartActivityIntent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
