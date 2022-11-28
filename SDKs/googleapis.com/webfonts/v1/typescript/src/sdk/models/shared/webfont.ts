import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Webfont
/** 
 * Metadata describing a family of fonts.
**/
export class Webfont extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=files" })
  files?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=subsets" })
  subsets?: string[];

  @SpeakeasyMetadata({ data: "json, name=variants" })
  variants?: string[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
