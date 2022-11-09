import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntentFilter
/** 
 * The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html
**/
export class IntentFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionNames" })
  actionNames?: string[];

  @Metadata({ data: "json, name=categoryNames" })
  categoryNames?: string[];

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
