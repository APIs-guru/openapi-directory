import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";


// GooglePrivacyDlpV2TableOptions
/** 
 * Instructions regarding the table content being inspected.
**/
export class GooglePrivacyDlpV2TableOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifyingFields", elemType: shared.GooglePrivacyDlpV2FieldId })
  identifyingFields?: GooglePrivacyDlpV2FieldId[];
}
