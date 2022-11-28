import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Link
/** 
 * URL item.
**/
export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
