import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2QuasiIdField } from "./googleprivacydlpv2quasiidfield";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";



// GooglePrivacyDlpV2AuxiliaryTable
/** 
 * An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
**/
export class GooglePrivacyDlpV2AuxiliaryTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quasiIds", elemType: GooglePrivacyDlpV2QuasiIdField })
  quasiIds?: GooglePrivacyDlpV2QuasiIdField[];

  @SpeakeasyMetadata({ data: "json, name=relativeFrequency" })
  relativeFrequency?: GooglePrivacyDlpV2FieldId;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: GooglePrivacyDlpV2BigQueryTable;
}
