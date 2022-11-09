import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Webfont
/** 
 * Metadata describing a family of fonts.
**/
export class Webfont extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=family" })
  family?: string;

  @Metadata({ data: "json, name=files" })
  files?: Map<string, string>;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @Metadata({ data: "json, name=subsets" })
  subsets?: string[];

  @Metadata({ data: "json, name=variants" })
  variants?: string[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}
