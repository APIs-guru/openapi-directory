import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2ImageTransformation } from "./googleprivacydlpv2imagetransformation";


// GooglePrivacyDlpV2ImageTransformations
/** 
 * A type of transformation that is applied over images.
**/
export class GooglePrivacyDlpV2ImageTransformations extends SpeakeasyBase {
  @Metadata({ data: "json, name=transforms", elemType: shared.GooglePrivacyDlpV2ImageTransformation })
  transforms?: GooglePrivacyDlpV2ImageTransformation[];
}
