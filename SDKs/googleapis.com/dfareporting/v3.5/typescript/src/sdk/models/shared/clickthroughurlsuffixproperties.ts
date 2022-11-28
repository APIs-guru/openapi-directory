import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClickThroughUrlSuffixProperties
/** 
 * Click Through URL Suffix settings.
**/
export class ClickThroughUrlSuffixProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickThroughUrlSuffix" })
  clickThroughUrlSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=overrideInheritedSuffix" })
  overrideInheritedSuffix?: boolean;
}
