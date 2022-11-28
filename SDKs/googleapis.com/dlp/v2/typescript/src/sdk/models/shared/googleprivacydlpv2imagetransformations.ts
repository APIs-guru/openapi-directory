import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ImageTransformation } from "./googleprivacydlpv2imagetransformation";



// GooglePrivacyDlpV2ImageTransformations
/** 
 * A type of transformation that is applied over images.
**/
export class GooglePrivacyDlpV2ImageTransformations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transforms", elemType: GooglePrivacyDlpV2ImageTransformation })
  transforms?: GooglePrivacyDlpV2ImageTransformation[];
}
