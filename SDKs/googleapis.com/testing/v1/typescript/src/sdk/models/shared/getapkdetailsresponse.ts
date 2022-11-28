import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApkDetail } from "./apkdetail";



// GetApkDetailsResponse
/** 
 * Response containing the details of the specified Android application APK.
**/
export class GetApkDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apkDetail" })
  apkDetail?: ApkDetail;
}
