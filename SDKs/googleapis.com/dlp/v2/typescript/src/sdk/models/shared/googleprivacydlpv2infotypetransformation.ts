import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";


// GooglePrivacyDlpV2InfoTypeTransformation
/** 
 * A transformation to apply to text that is identified as a specific info_type.
**/
export class GooglePrivacyDlpV2InfoTypeTransformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=infoTypes", elemType: shared.GooglePrivacyDlpV2InfoType })
  infoTypes?: GooglePrivacyDlpV2InfoType[];

  @Metadata({ data: "json, name=primitiveTransformation" })
  primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
}
