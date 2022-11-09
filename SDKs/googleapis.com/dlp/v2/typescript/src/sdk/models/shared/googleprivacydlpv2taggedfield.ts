import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";


// GooglePrivacyDlpV2TaggedField
/** 
 * A column with a semantic tag attached.
**/
export class GooglePrivacyDlpV2TaggedField extends SpeakeasyBase {
  @Metadata({ data: "json, name=customTag" })
  customTag?: string;

  @Metadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;

  @Metadata({ data: "json, name=inferred" })
  inferred?: Map<string, any>;

  @Metadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;
}
