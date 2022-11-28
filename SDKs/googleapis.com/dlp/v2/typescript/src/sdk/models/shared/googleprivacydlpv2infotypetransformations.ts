import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeTransformation } from "./googleprivacydlpv2infotypetransformation";



// GooglePrivacyDlpV2InfoTypeTransformations
/** 
 * A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
**/
export class GooglePrivacyDlpV2InfoTypeTransformations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transformations", elemType: GooglePrivacyDlpV2InfoTypeTransformation })
  transformations?: GooglePrivacyDlpV2InfoTypeTransformation[];
}
