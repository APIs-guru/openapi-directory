import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metadata
/** 
 * A tag within a manifest. https://developer.android.com/guide/topics/manifest/meta-data-element.html
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
