import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AndroidInfo
/** 
 * Android related attributes to the Dynamic Link.
**/
export class AndroidInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidFallbackLink" })
  androidFallbackLink?: string;

  @SpeakeasyMetadata({ data: "json, name=androidLink" })
  androidLink?: string;

  @SpeakeasyMetadata({ data: "json, name=androidMinPackageVersionCode" })
  androidMinPackageVersionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=androidPackageName" })
  androidPackageName?: string;
}
