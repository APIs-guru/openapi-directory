import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";



// GooglePrivacyDlpV2BigQueryKey
/** 
 * Row key for identifying a record in BigQuery table.
**/
export class GooglePrivacyDlpV2BigQueryKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rowNumber" })
  rowNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=tableReference" })
  tableReference?: GooglePrivacyDlpV2BigQueryTable;
}
