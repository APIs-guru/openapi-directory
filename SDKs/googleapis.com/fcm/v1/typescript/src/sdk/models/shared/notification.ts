import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Notification
/** 
 * Basic notification template to use across all platforms.
**/
export class Notification extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
