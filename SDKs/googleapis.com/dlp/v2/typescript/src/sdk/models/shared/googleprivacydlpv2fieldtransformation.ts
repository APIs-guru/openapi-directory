import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2RecordCondition } from "./googleprivacydlpv2recordcondition";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2InfoTypeTransformations } from "./googleprivacydlpv2infotypetransformations";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";


// GooglePrivacyDlpV2FieldTransformation
/** 
 * The transformation to apply to the field.
**/
export class GooglePrivacyDlpV2FieldTransformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: GooglePrivacyDlpV2RecordCondition;

  @Metadata({ data: "json, name=fields", elemType: shared.GooglePrivacyDlpV2FieldId })
  fields?: GooglePrivacyDlpV2FieldId[];

  @Metadata({ data: "json, name=infoTypeTransformations" })
  infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;

  @Metadata({ data: "json, name=primitiveTransformation" })
  primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
}
