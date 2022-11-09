import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClickThroughUrlSuffixProperties
/** 
 * Click Through URL Suffix settings.
**/
export class ClickThroughUrlSuffixProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickThroughUrlSuffix" })
  clickThroughUrlSuffix?: string;

  @Metadata({ data: "json, name=overrideInheritedSuffix" })
  overrideInheritedSuffix?: boolean;
}
