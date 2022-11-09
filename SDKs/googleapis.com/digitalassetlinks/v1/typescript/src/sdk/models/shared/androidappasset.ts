import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateInfo } from "./certificateinfo";


// AndroidAppAsset
/** 
 * Describes an android app asset.
**/
export class AndroidAppAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: CertificateInfo;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;
}
