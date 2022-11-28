import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Notification
/** 
 * Basic notification template to use across all platforms.
**/
export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
