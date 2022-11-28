import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateInfo } from "./certificateinfo";



// AndroidAppAsset
/** 
 * Describes an android app asset.
**/
export class AndroidAppAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: CertificateInfo;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}
