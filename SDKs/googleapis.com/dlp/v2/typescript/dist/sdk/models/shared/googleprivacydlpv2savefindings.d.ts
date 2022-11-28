import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2OutputStorageConfig } from "./googleprivacydlpv2outputstorageconfig";
/**
 * If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
**/
export declare class GooglePrivacyDlpV2SaveFindings extends SpeakeasyBase {
    outputConfig?: GooglePrivacyDlpV2OutputStorageConfig;
}
