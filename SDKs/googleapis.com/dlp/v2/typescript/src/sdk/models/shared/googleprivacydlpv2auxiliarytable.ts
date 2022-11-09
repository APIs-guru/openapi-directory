import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2QuasiIdField } from "./googleprivacydlpv2quasiidfield";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";


// GooglePrivacyDlpV2AuxiliaryTable
/** 
 * An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
**/
export class GooglePrivacyDlpV2AuxiliaryTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=quasiIds", elemType: shared.GooglePrivacyDlpV2QuasiIdField })
  quasiIds?: GooglePrivacyDlpV2QuasiIdField[];

  @Metadata({ data: "json, name=relativeFrequency" })
  relativeFrequency?: GooglePrivacyDlpV2FieldId;

  @Metadata({ data: "json, name=table" })
  table?: GooglePrivacyDlpV2BigQueryTable;
}
