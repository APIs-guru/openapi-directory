import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Container } from "./googleprivacydlpv2container";
import { GooglePrivacyDlpV2TableOptions } from "./googleprivacydlpv2tableoptions";



// GooglePrivacyDlpV2HybridFindingDetails
/** 
 * Populate to associate additional data with each finding.
**/
export class GooglePrivacyDlpV2HybridFindingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerDetails" })
  containerDetails?: GooglePrivacyDlpV2Container;

  @SpeakeasyMetadata({ data: "json, name=fileOffset" })
  fileOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=rowOffset" })
  rowOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=tableOptions" })
  tableOptions?: GooglePrivacyDlpV2TableOptions;
}
