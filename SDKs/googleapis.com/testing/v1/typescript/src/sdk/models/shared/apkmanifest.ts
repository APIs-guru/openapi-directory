import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntentFilter } from "./intentfilter";
import { Metadata } from "./metadata";
import { UsesFeature } from "./usesfeature";



// ApkManifest
/** 
 * An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
**/
export class ApkManifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationLabel" })
  applicationLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=intentFilters", elemType: IntentFilter })
  intentFilters?: IntentFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxSdkVersion" })
  maxSdkVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: Metadata })
  metadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=minSdkVersion" })
  minSdkVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=targetSdkVersion" })
  targetSdkVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=usesFeature", elemType: UsesFeature })
  usesFeature?: UsesFeature[];

  @SpeakeasyMetadata({ data: "json, name=usesPermission" })
  usesPermission?: string[];

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=versionName" })
  versionName?: string;
}
