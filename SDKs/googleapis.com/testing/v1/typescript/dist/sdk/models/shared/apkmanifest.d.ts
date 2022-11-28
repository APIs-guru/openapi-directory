import { SpeakeasyBase } from "../../../internal/utils";
import { IntentFilter } from "./intentfilter";
import { Metadata } from "./metadata";
import { UsesFeature } from "./usesfeature";
/**
 * An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
**/
export declare class ApkManifest extends SpeakeasyBase {
    applicationLabel?: string;
    intentFilters?: IntentFilter[];
    maxSdkVersion?: number;
    metadata?: Metadata[];
    minSdkVersion?: number;
    packageName?: string;
    targetSdkVersion?: number;
    usesFeature?: UsesFeature[];
    usesPermission?: string[];
    versionCode?: string;
    versionName?: string;
}
