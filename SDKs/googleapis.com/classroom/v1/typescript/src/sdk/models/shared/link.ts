import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Link
/** 
 * URL item.
**/
export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
