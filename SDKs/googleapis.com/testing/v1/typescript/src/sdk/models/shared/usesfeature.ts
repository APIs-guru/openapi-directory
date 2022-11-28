import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsesFeature
/** 
 * A tag within a manifest. https://developer.android.com/guide/topics/manifest/uses-feature-element.html
**/
export class UsesFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
