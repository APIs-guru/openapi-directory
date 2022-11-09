import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebLabel
/** 
 * Label to provide extra metadata for the web detection.
**/
export class WebLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
