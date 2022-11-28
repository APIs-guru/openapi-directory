import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2RecordCondition } from "./googleprivacydlpv2recordcondition";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2InfoTypeTransformations } from "./googleprivacydlpv2infotypetransformations";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";



// GooglePrivacyDlpV2FieldTransformation
/** 
 * The transformation to apply to the field.
**/
export class GooglePrivacyDlpV2FieldTransformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: GooglePrivacyDlpV2RecordCondition;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GooglePrivacyDlpV2FieldId })
  fields?: GooglePrivacyDlpV2FieldId[];

  @SpeakeasyMetadata({ data: "json, name=infoTypeTransformations" })
  infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;

  @SpeakeasyMetadata({ data: "json, name=primitiveTransformation" })
  primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
}
