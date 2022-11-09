import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2TableOptions } from "./googleprivacydlpv2tableoptions";


// GooglePrivacyDlpV2HybridOptions
/** 
 * Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
**/
export class GooglePrivacyDlpV2HybridOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=requiredFindingLabelKeys" })
  requiredFindingLabelKeys?: string[];

  @Metadata({ data: "json, name=tableOptions" })
  tableOptions?: GooglePrivacyDlpV2TableOptions;
}
