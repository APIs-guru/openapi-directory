import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PagespeedVersion
/** 
 * The Pagespeed Version object.
**/
export class PagespeedVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=major" })
  major?: string;

  @Metadata({ data: "json, name=minor" })
  minor?: string;
}
