import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";



// GooglePrivacyDlpV2BigQueryField
/** 
 * Message defining a field of a BigQuery table.
**/
export class GooglePrivacyDlpV2BigQueryField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: GooglePrivacyDlpV2BigQueryTable;
}
