import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartActivityIntent
/** 
 * A starting intent specified by an action, uri, and categories.
**/
export class StartActivityIntent extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
