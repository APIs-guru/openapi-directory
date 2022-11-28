import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2TableOptions } from "./googleprivacydlpv2tableoptions";



// GooglePrivacyDlpV2HybridOptions
/** 
 * Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
**/
export class GooglePrivacyDlpV2HybridOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=requiredFindingLabelKeys" })
  requiredFindingLabelKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=tableOptions" })
  tableOptions?: GooglePrivacyDlpV2TableOptions;
}
