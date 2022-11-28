import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoLocalization
/** 
 * Localized versions of certain video properties (e.g. title).
**/
export class VideoLocalization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
