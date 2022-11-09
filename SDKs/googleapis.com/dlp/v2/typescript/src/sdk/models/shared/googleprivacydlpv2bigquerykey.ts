import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";


// GooglePrivacyDlpV2BigQueryKey
/** 
 * Row key for identifying a record in BigQuery table.
**/
export class GooglePrivacyDlpV2BigQueryKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=rowNumber" })
  rowNumber?: string;

  @Metadata({ data: "json, name=tableReference" })
  tableReference?: GooglePrivacyDlpV2BigQueryTable;
}
