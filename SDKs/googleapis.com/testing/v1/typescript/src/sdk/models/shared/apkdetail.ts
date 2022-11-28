import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApkManifest } from "./apkmanifest";



// ApkDetail
/** 
 * Android application details based on application manifest and apk archive contents.
**/
export class ApkDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apkManifest" })
  apkManifest?: ApkManifest;
}
