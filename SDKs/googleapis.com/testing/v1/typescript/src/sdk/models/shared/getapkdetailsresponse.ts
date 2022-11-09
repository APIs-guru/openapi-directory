import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApkDetail } from "./apkdetail";


// GetApkDetailsResponse
/** 
 * Response containing the details of the specified Android application APK.
**/
export class GetApkDetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apkDetail" })
  apkDetail?: ApkDetail;
}
