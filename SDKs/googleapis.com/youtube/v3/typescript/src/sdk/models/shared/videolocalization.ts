import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoLocalization
/** 
 * Localized versions of certain video properties (e.g. title).
**/
export class VideoLocalization extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
