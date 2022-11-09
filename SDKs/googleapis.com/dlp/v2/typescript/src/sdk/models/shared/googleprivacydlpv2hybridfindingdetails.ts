import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Container } from "./googleprivacydlpv2container";
import { GooglePrivacyDlpV2TableOptions } from "./googleprivacydlpv2tableoptions";


// GooglePrivacyDlpV2HybridFindingDetails
/** 
 * Populate to associate additional data with each finding.
**/
export class GooglePrivacyDlpV2HybridFindingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerDetails" })
  containerDetails?: GooglePrivacyDlpV2Container;

  @Metadata({ data: "json, name=fileOffset" })
  fileOffset?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=rowOffset" })
  rowOffset?: string;

  @Metadata({ data: "json, name=tableOptions" })
  tableOptions?: GooglePrivacyDlpV2TableOptions;
}
