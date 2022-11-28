import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntentFilter
/** 
 * The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html
**/
export class IntentFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionNames" })
  actionNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=categoryNames" })
  categoryNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
