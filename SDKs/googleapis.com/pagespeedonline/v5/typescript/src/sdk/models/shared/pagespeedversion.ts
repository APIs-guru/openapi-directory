import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PagespeedVersion
/** 
 * The Pagespeed Version object.
**/
export class PagespeedVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=major" })
  major?: string;

  @SpeakeasyMetadata({ data: "json, name=minor" })
  minor?: string;
}
