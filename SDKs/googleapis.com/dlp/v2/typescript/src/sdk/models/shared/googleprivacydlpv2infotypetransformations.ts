import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2InfoTypeTransformation } from "./googleprivacydlpv2infotypetransformation";


// GooglePrivacyDlpV2InfoTypeTransformations
/** 
 * A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
**/
export class GooglePrivacyDlpV2InfoTypeTransformations extends SpeakeasyBase {
  @Metadata({ data: "json, name=transformations", elemType: shared.GooglePrivacyDlpV2InfoTypeTransformation })
  transformations?: GooglePrivacyDlpV2InfoTypeTransformation[];
}
