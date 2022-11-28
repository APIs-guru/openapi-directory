import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BoundingBox } from "./googleprivacydlpv2boundingbox";



// GooglePrivacyDlpV2ImageLocation
/** 
 * Location of the finding within an image.
**/
export class GooglePrivacyDlpV2ImageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBoxes", elemType: GooglePrivacyDlpV2BoundingBox })
  boundingBoxes?: GooglePrivacyDlpV2BoundingBox[];
}
