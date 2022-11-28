import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";



// GooglePrivacyDlpV2InfoTypeTransformation
/** 
 * A transformation to apply to text that is identified as a specific info_type.
**/
export class GooglePrivacyDlpV2InfoTypeTransformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infoTypes", elemType: GooglePrivacyDlpV2InfoType })
  infoTypes?: GooglePrivacyDlpV2InfoType[];

  @SpeakeasyMetadata({ data: "json, name=primitiveTransformation" })
  primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
}
