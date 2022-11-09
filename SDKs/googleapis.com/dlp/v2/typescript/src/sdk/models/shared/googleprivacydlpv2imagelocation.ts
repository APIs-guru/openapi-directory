import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2BoundingBox } from "./googleprivacydlpv2boundingbox";


// GooglePrivacyDlpV2ImageLocation
/** 
 * Location of the finding within an image.
**/
export class GooglePrivacyDlpV2ImageLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBoxes", elemType: shared.GooglePrivacyDlpV2BoundingBox })
  boundingBoxes?: GooglePrivacyDlpV2BoundingBox[];
}
