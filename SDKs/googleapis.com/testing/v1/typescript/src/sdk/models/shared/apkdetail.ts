import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApkManifest } from "./apkmanifest";


// ApkDetail
/** 
 * Android application details based on application manifest and apk archive contents.
**/
export class ApkDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=apkManifest" })
  apkManifest?: ApkManifest;
}
