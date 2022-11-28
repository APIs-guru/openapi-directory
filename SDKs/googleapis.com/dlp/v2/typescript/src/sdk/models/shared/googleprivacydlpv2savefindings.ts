import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2OutputStorageConfig } from "./googleprivacydlpv2outputstorageconfig";



// GooglePrivacyDlpV2SaveFindings
/** 
 * If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
**/
export class GooglePrivacyDlpV2SaveFindings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: GooglePrivacyDlpV2OutputStorageConfig;
}
