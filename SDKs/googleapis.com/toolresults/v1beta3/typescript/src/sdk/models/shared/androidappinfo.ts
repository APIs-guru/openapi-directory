import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AndroidAppInfo
/** 
 * Android app information.
**/
export class AndroidAppInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=versionName" })
  versionName?: string;
}
