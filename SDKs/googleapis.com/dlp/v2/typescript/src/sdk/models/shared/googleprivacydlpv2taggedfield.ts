import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";



// GooglePrivacyDlpV2TaggedField
/** 
 * A column with a semantic tag attached.
**/
export class GooglePrivacyDlpV2TaggedField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customTag" })
  customTag?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;

  @SpeakeasyMetadata({ data: "json, name=inferred" })
  inferred?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;
}
