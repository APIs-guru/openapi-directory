import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebLabel
/** 
 * Label to provide extra metadata for the web detection.
**/
export class WebLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
