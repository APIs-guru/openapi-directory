import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";



// GooglePrivacyDlpV2TransformationDetailsStorageConfig
/** 
 * Config for storing transformation details.
**/
export class GooglePrivacyDlpV2TransformationDetailsStorageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: GooglePrivacyDlpV2BigQueryTable;
}
