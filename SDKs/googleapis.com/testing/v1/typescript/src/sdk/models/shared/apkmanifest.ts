import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntentFilter } from "./intentfilter";


// ApkManifest
/** 
 * An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
**/
export class ApkManifest extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationLabel" })
  applicationLabel?: string;

  @Metadata({ data: "json, name=intentFilters", elemType: shared.IntentFilter })
  intentFilters?: IntentFilter[];

  @Metadata({ data: "json, name=maxSdkVersion" })
  maxSdkVersion?: number;

  @Metadata({ data: "json, name=minSdkVersion" })
  minSdkVersion?: number;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=targetSdkVersion" })
  targetSdkVersion?: number;

  @Metadata({ data: "json, name=usesPermission" })
  usesPermission?: string[];

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: string;

  @Metadata({ data: "json, name=versionName" })
  versionName?: string;
}
