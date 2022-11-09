import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AndroidInfo
/** 
 * Android related attributes to the Dynamic Link.
**/
export class AndroidInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidFallbackLink" })
  androidFallbackLink?: string;

  @Metadata({ data: "json, name=androidLink" })
  androidLink?: string;

  @Metadata({ data: "json, name=androidMinPackageVersionCode" })
  androidMinPackageVersionCode?: string;

  @Metadata({ data: "json, name=androidPackageName" })
  androidPackageName?: string;
}
