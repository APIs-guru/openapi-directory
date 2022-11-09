import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudOrgpolicyV2PolicySpec } from "./googlecloudorgpolicyv2policyspec";
/**
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
**/
export declare class GoogleCloudOrgpolicyV2AlternatePolicySpec extends SpeakeasyBase {
    launch?: string;
    spec?: GoogleCloudOrgpolicyV2PolicySpec;
}
