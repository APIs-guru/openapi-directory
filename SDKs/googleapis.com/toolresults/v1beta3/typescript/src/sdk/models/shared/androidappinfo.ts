import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AndroidAppInfo
/** 
 * Android app information.
**/
export class AndroidAppInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: string;

  @Metadata({ data: "json, name=versionName" })
  versionName?: string;
}
